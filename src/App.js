import React, { Component } from 'react';
import './App.css';
// import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Profile from './components/Profile';
import Alumni from './components/Alumni';
// import Timeline from './components/Timeline';

class App extends Component {
  state = {
  }

  render() {
    return (
      <div>
        <div>
          <Switch>
            <Route path='/login' render={() => <Login />} />
            <Route path='/profile' render={() => <Profile />} />
            <Route path='/alumni' render={() => <Alumni />} />
            {/* <Route path='/timeline' render={() => <Timeline />} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}



export default App;