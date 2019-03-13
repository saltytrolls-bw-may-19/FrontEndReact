import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

//components
import Navigation from './components/Navigation/Navigation';
import HackerList from './components/HackerList/HackerList';
import Login from './components/authentication/Login';
import Logout from './components/authentication/Logout';
import Register from './components/authentication/Register';
import UserPage from './components/UserPage/UserPage';
import HackerProfile from './components/HackerProfile/HackerProfile';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthed: false,
      currentUserId: '',
      loading: false,
      hackerList: [],
      hackersDetails: [],
      currentAuthor: ''
    };
  }

  //getting data from server
  getHackers = () => {
    this.setState({ loading: true });
    axios
      .get('https://buildweek-saltytrolls.herokuapp.com/api/hackers/:id')
      .then(res => {
        console.log(res);
        this.setState(() => ({ hackerList: res.data }));
      })
      .catch(err => {
        console.log(err.message);
      })
      .finally(this.setState({ loading: false }));
  };
  getHackersDetails = () => {
    axios
      .get('https://buildweek-saltytrolls.herokuapp.com/api/hackers/:id/details')
      .then(res => {
        console.log(res);
        this.setState(() => ({ hackersDetails: res.data, currentAuthor: res.data[0].author }));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  //authorization
  authUser = (token, id) => {
    localStorage.setItem('token', token);
    this.setState({ isAuthed: true });
    this.setState({ currentUserId: id });
  };

  unAuthUser = () => {
    this.setState({ isAuthed: false, currentUserId: '' });
    localStorage.clear();

    localStorage.setItem('isAuthed', '');

  };

  render() {
    const { isAuthed } = this.state;

    return (
      <div className="App">
        <Navigation isAuthed={isAuthed} />
        <Route exact path="/login" render={pr => <Login isAuthed={isAuthed} authUser={this.authUser} {...pr} />} />
        <Route exact path="/register" render={pr => <Register isAuthed={isAuthed} {...pr} />} />
        <Route exact path="/logout" render={pr => <Logout isAuthed={isAuthed} unAuthUser={this.unAuthUser} {...pr} />} />
        <div className="app-wrapper">
          <Route exact path="/" render={pr => <HackerList hackerList={this.state.hackerList} getHackers={this.getHackers} isAuthed={isAuthed} {...pr} />} />
          <Route exact path="/user" render={pr => <UserPage isAuthed={isAuthed} unAuthUser={this.unAuthUser} currentUserId={this.state.currentUserId} {...pr} />} />
          <Route
            exact
            path="/hacker/:id"
            render={pr => <HackerProfile hackersDetails={this.state.hackersDetails} currentAuthor={this.state.currentAuthor} getHackersDetails={this.getHackersDetails} isAuthed={isAuthed} {...pr} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
