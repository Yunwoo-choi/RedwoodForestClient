import React, { Component } from 'react';
import './App.css';
// import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Timeline from './components/Timeline';
import Alumni from './components/Alumni';
import Profile from './components/Profile';
import AlumniProfile from './components/AlumniProfile';

class App extends Component {
  state = {
  }

  render() {
    return (
      <div>
        <div>
          <Switch>
            <Route path='/login' render={() => <Login />} />
            <Route path='/timeline' render={() => <Timeline />} />
            <Route path='/alumni' render={() => <Alumni />} />
            <Route path='/profile' render={() => <Profile />} />
            <Route path='/alumni-profile' render={() => <AlumniProfile />} />
          </Switch>
        </div>
      </div>
    );
  }
}



export default App;