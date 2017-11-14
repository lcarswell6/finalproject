import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import User from './components/User';
import UserList from './components/UserList';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <div>
            <h1>Dressed Yet?</h1>
          </div>

          <Route exact path="/users" component={UserList} />
          <Route path="/user/:id" component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
