import React, { Component } from 'react';

class Timeline extends Component {
  render() {
    return (
      <div className="Timeline">
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
        <div className='post'>
            <img className='profilePostPic' src='https://www.biography.com/.image/t_share/MTQ1NDY2OTk4Njk5MDc1MzQ1/mark-zuckerberg---mini-biography.jpg'></img>
            <h3 className='name'>Mark zuckerberg</h3>
                I'm looking to hire graduates from Redwood! <br/>
                Salary 105k<br/>
                Requirments:<br/>
                <ul>
                  <li>React Native</li>
                  <li>Boot Straps</li>
                  <li>Must sell information to government</li>
                </ul>
                <br/>
            <img className='profilePostPic'
              src='https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/29/04/elonmusk2908a.jpg'></img>
              
              <h3 className='name'> Elon musk </h3>
                I'm looking for a front end developer! <br/>
                Salary 87K <br/>
                Requirments: 
                <ul>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Native</li>
                  <li>Must smoke weed</li>
                </ul>
        </div>
        <div className='postAJob'>
          {/* <input type='text' value='post'> </input> */}
        </div>
      </div>
        );      
      }
     } 
     export default Timeline;
