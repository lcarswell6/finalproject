import './App.css'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios'
import NavBar from './components/NavBar'
import User from './components/User'
import UserList from './components/UserList'
import Venue from './components/Venue'
import VenueList from './components/VenueList'
import Post from './components/Post'
import PostList from './components/PostList'
import styled from 'styled-components'
import VenuePage from './components/VenuePage'


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
          <Route exact path="/venues/:id" component={VenuePage} />
          <Route exact path="/venues/:venue_id/posts/:id" component={Post} />

          {/* <Route path="/users/:userId" component={User} /> */}

        </div>
      </Router>
    );
  }
}

export default App;
