import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//components
import Navigation from './components/Navigation';
import HackerList from './components/HackerList';
import Login from './components/authentication/Login';
import Logout from './components/authentication/Logout';
import Register from './components/authentication/Register';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthed: false
    };
  }

  authUser = token => {
    localStorage.setItem('token', token);
    localStorage.setItem('isAuthed', 'true');
    this.setState({ isAuthed: true });
  };

  unAuthUser = () => {
    this.setState({ isAuthed: false });
    localStorage.clear();
    localStorage.setItem('isAuthed', 'false');
  };

  render() {
    const { isAuthed } = this.state;

    return (
      <div className="App">
        <Navigation />
        <Route exact path="/login" render={pr => <Login isAuthed={isAuthed} authUser={this.authUser} {...pr} />} />
        <Route exact path="/register" render={pr => <Register isAuthed={isAuthed} {...pr} />} />
        <Route exact path="/logout" render={pr => <Logout isAuthed={isAuthed} unAuthUser={this.unAuthUser} {...pr} />} />
        <Route exact path="/" render={pr => <HackerList isAuthed={isAuthed} {...pr} />} />

        {/*STRETCH: <Route exact path="/:hacker" render={pr => <Hacker {...pr} />} /> */}
      </div>
    );
  }
}

export default App;
