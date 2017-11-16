import './App.css'
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch,  Route, Link } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components'
import NavBar from './components/NavBar'
import User from './components/User'
import UserList from './components/UserList'
import UserPage from './components/UserPage'
import Venue from './components/Venue'
import VenueList from './components/VenueList'
import VenuePage from './components/VenuePage'
import Post from './components/Post'
import PostList from './components/PostList'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
          <div>
            <h1>Dressed Yet?</h1>
          </div>
<Switch>

          <Route exact path="/users" component={User} />
          <Route exact path="/users/:id" component={UserPage} />
          <Route exact path="/venues" component={Venue} />
          <Route exact path="/venues/:id" component={VenuePage} />
          <Route exact path="/venues/:venue_id/posts/:id" component={Post} />
</Switch>



        </div>
      </Router>
    );
  }
}

export default App;
