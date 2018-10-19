import React, { Component } from 'react';


class Profile extends Component {
  render() {
    return (
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
                    <li><a href="#" class="active">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Alumni</a></li>
                    <li><a href="#">Jobs</a></li>    
                </ul>
            </nav>
            <div class="menu-toggle"><i class="fa fa-bars" aria-hidden="true"></i></div>
        </header>    
      </div>  
      {/* NAV BAR IS COMPLETE */}
      {/* START OF PROFILE PAGE */}
      <div class='profile'>
        <div className='header'></div>
          <div >
            <img className='profilePicture' src='https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/29/04/elonmusk2908a.jpg'></img>
          </div>
          <div className='ProfileInfo'>
            <h2 className='firstName'>
              Elon
            </h2>
            <h2 className='lastName'>
              Musk
            </h2>
            <h3 className='Cohort'>
              Graduated Redwood in, Fall-2018
            </h3>
            <h4>
              Projects:
            </h4>
            <ul>
              <li>PayPal</li>
              <li>The Boring Company</li>
              <li>Tesla</li>
              <li>Tesla Solar</li>
              <li>SpaceX</li>
            </ul>
          </div>
          <div className='summary'>
          <p>
                      Elon Reeve Musk FRS is a business magnate and investor. He holds South African, Canadian, and U.S. citizenship and is the founder, CEO, and lead designer of SpaceX; co-founder, CEO, and product architect of Tesla, Inc.; co-founder and CEO of Neuralink; and co-founder of PayPal.                                     
          </p>
          </div> 
          <div className='info'>
              <h3 className='location'>
                  Currently living in: Silicon Valley, CA
              </h3>
              <h3 className='currentJob'>
                  Currently Working At:<br/>
                  Tesla<br/>
                  SpaceX
              </h3>
              <h3 className='Education'>
                  Graduated from:<br/>
                  <img src=''></img>Queens University<br/>
                  University of Pennsylvania
              </h3>
              <h3 className='Skills'>
                  Skills: nun-chuck skills
              </h3>
          </div> 
          <div className='Experience'>
          <h3>
            Experiences:
          </h3><br/>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </div>       
      </div>
      {/* END OF PROFILE */}
    </div>
    
    );
  }
}

export default Profile;
