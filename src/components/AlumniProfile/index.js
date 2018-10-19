import React, { Component } from 'react';
import { conditionalAlumniProfile, getSpecificAlumni } from '../Redux/Actions';
import { connect } from 'react-redux';

class AlumniProfile extends Component {
  
    componentDidMount() {
        this.props.getAlumniData(this.props.alumniId);
        console.log(this.props.alumniData)
    }

    render() {
    return (
      this.props.alumniData && <div className="App">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous"></link>
      <div>
        <header>
            <div className='logo'>
            <h2>
                REDWOOD FOREST 
            </h2>
            </div>
            <nav className="active">
                <ul>
                    <li><a href="timeline" className="active">Home</a></li>
                    <li><a href="profile">Profile</a></li>
                    <li><a href="alumni">Alumni</a></li>
                </ul>
            </nav>
            <div className="menu-toggle"><i className="fa fa-bars" aria-hidden="true"></i></div>
        </header>    
      </div>  
      {/* NAV BAR IS COMPLETE */}
      {/* START OF PROFILE PAGE */}
      <div className='profile'>
        <div className='header'></div>
          <div >
            <img className='profilePicture' src={this.props.alumniData.image}></img>
          </div>
          <div className='ProfileInfo'>
            <h2 className='firstName'>
              {this.props.alumniData.first_name}
            </h2>
            <h2 className='lastName'>
            {this.props.alumniData.last_name}
            </h2>
            <h3 className='Cohort'>
              Graduated Redwood in {this.props.alumniData.date.date.substring(0,4)}
            </h3>
            <h4>
              Projects:
            </h4>
            <ul>
              <li>{this.props.alumniData.projects}</li>
            </ul>
          </div>
          <div className='summary'>
          <p>
          {this.props.alumniData.first_name} {this.props.alumniData.last_name} FRS is a business magnate and investor. He holds South African, Canadian, and U.S. citizenship and is the founder, CEO, and lead designer of SpaceX; co-founder, CEO, and product architect of Tesla, Inc.; co-founder and CEO of Neuralink; and co-founder of PayPal.                                     
          </p>
          </div> 
          <div className='info'>
              <h3 className='location'>
                {this.props.alumniData.location}
              </h3>
              <h3 className='currentJob'>
                  Currently Working At:<br/>
                  {this.props.alumniData.current_job},<br/>
                  Redwood Code Academy
              </h3>
              <h3 className='Education'>
                  Graduated from:<br/>
                  {this.props.alumniData.education}
              </h3>
              <h3 className='Skills'>
              {this.props.alumniData.skills}
              </h3>
          </div> 
          <div className='Experience'>
          <h3>
            Experiences:
          </h3><br/>
          {this.props.alumniData.experience.title}<br />
          {this.props.alumniData.experience.company}<br />
          {this.props.alumniData.experience.duration.substring(6,7)}<br />
          {this.props.alumniData.experience.location}<br />
          {this.props.alumniData.experience.description}<br />

          </div>       
      </div>
      {/* END OF PROFILE */}
    </div>
    
    );
  }
}


const mapStateToProps = state => ({
    alumniId: state.alumniId,
    alumniData: state.alumniData
})

const mapDispatchToProps = dispatch => ({
    changeAlumniId: id => dispatch(conditionalAlumniProfile(id)),
    getAlumniData: id => dispatch(getSpecificAlumni(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AlumniProfile);
