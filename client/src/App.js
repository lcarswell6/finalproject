import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import NavBar from './components/NavBar'
import User from './components/User';
import UserList from './components/UserList';
import Venue from './components/Venue'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <div>
            <h1>Dressed Yet?</h1>
          </div>

            <Route exact path="/users" component={User} />
            <Route exact path="/venues" component={Venue} />
            {/* <Route path="/users/:userId" component={User} /> */}

        </div>
      </Router>
    );
  }
}

export default App;
