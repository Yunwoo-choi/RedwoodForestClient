import React, { Component } from 'react';
import { conditionalAlumniProfile, getProfileData } from '../Redux/Actions';
import { connect } from 'react-redux';

class Profile extends Component {
  
  componentDidMount() {
    this.props.getProfileData(this.props.profileId);
}

  render() {
    return ( this.props.profileData &&
      <div className="App">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous"></link>
      <div>
        <header>
            <div class='logo'>
            <h2>
                REDWOOD FOREST 
            </h2>
            </div>
            <nav class="active">
                <ul>
                    <li><a href="timeline" class="active">Home</a></li>
                    <li><a href="alumni">Alumni</a></li>
                </ul>
            </nav>
            <div class="menu-toggle"><i class="fa fa-bars" aria-hidden="true"></i></div>
        </header>    
      </div>  
      {/* NAV BAR IS COMPLETE */}
      {/* START OF PROFILE PAGE */}
      <div className='profile'>
        <div className='header'></div>
          <div >
            <img className='profilePicture' src={this.props.profileData.image}></img>
          </div>
          <div className='ProfileInfo'>
            <h2 className='firstName'>
              {this.props.profileData.first_name}
            </h2>
            <h2 className='lastName'>
            {this.props.profileData.last_name}
            </h2>
            <h3 className='Cohort'>
              Graduated Redwood in {this.props.profileData.date.date.substring(0,4)}
            </h3>
            <h4>
              Projects:
            </h4>
            <ul>
              <li>{this.props.profileData.projects}</li>
            </ul>
          </div>
          <div className='summary'>
          <p>
          {this.props.profileData.first_name} {this.props.profileData.last_name} FRS is a business magnate and investor. He holds South African, Canadian, and U.S. citizenship and is the founder, CEO, and lead designer of SpaceX; co-founder, CEO, and product architect of Tesla, Inc.; co-founder and CEO of Neuralink; and co-founder of PayPal.                                     
          </p>
          </div> 
          <div className='info'>
              <h3 className='location'>
                {this.props.profileData.location}
              </h3>
              <h3 className='currentJob'>
                  Currently Working At:<br/>
                  {this.props.profileData.current_job},<br/>
                  Redwood Code Academy
              </h3>
              <h3 className='Education'>
                  Graduated from:<br/>
                  {this.props.profileData.education}
              </h3>
              <h3 className='Skills'>
              {this.props.profileData.skills}
              </h3>
          </div> 
          <div className='Experience'>
          <h3>
            Experiences:
          </h3><br/>
          {this.props.profileData.experience.title}<br />
          {this.props.profileData.experience.company}<br />
          {this.props.profileData.experience.duration.substring(6,7)}<br />
          {this.props.profileData.experience.location}<br />
          {this.props.profileData.experience.description}<br />

          </div>       
      </div>
      {/* END OF PROFILE */}
    </div>
    
    );
  }
}

const mapStateToProps = state => ({
  profileId: state.profileId,
  profileData: state.profileData
})

const mapDispatchToProps = dispatch => ({
  changeAlumniId: id => dispatch(conditionalAlumniProfile(id)),
  getProfileData: id => dispatch(getProfileData(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
