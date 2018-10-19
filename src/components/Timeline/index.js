import React, { Component } from 'react';
import { getAllProfiles, addProfile, conditionalAlumniProfile, getAllPosts } from '../Redux/Actions';
import { connect } from 'react-redux';

class Timeline extends Component {

  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    return ( this.props.posts &&
      <div className='Timeline'>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous"></link>
        <div>
          <header>
            <div class='logo' style={{ color: 'white', fontFamily: 'mali' }}>
              <h2>
                REDWOOD FOREST
            </h2>
            </div>
            <nav class="active">
              <ul>
                <li><a href="profile">Profile</a></li>
                <li><a href="alumni">Alumni</a></li>
              </ul>
            </nav>
            <div class="menu-toggle"><i class="fa fa-bars" aria-hidden="true"></i></div>
          </header>
        </div>
        <div>
          <div className='sidebar'>
            <h4>
              News
            </h4>
            <img src="https://png.icons8.com/nolan/50/000000/news.png"></img>
            <h4>
              Messages
            </h4>
            <img src="https://png.icons8.com/nolan/50/000000/speech-bubble.png"></img>
            <h4>
              Events
            </h4>
            <img src="https://png.icons8.com/nolan/50/000000/overtime.png"></img>
            <h4>
              Groups
            </h4>
            <img src="https://png.icons8.com/nolan/50/000000/groups.png"></img>
          </div>
          <div className='post' style={{ height: 'auto' }}>
            {
              this.props.posts.map((x, i) => (
                <div>
                <img className='profilePostPic' src={x.profile.image} />
                <h3 className='name'>{x.profile.first_name} {x.profile.last_name}</h3>
                <div className='req'>
                  <p>{x.post} </p>
                </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='postAJob'>
          {/* <input type='text' value='post'> </input> */}
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  profiles: state.profiles,
  alumniId: state.alumniId,
  posts: state.posts,
  profileData: state.profileData
})

const mapDispatchToProps = dispatch => ({
  getAllProfiles: () => dispatch(getAllProfiles()),
  addProfile: (alumni) => dispatch(addProfile(alumni)),
  changeAlumniId: id => dispatch(conditionalAlumniProfile(id)),
  getAllPosts: () => dispatch(getAllPosts()),

})
export default connect(mapStateToProps, mapDispatchToProps)(Timeline);



// {
//   this.props.posts.map((x, i) => (
//       <div style={{ display: 'flex', flexDirection: 'column' }}>
//       <button className="btn btn-outline-info" style={{ flex: 1, borderWidth: 0 }} onClick={() => this.setState({ grad_date_id: x.grad_date_id, cohortGraduationTitle: x.date.substring(0,10)})}>{x.date.substring(0,10)}</button>
//       </div>
//   ))
// }