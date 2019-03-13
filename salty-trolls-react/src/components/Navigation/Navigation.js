import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

export default class Navigation extends React.Component {
  render() {
    if (!this.props.isAuthed)
      return (
        <div className="navbar">
          <a className="logo" href="https://buildweek-saltytrolls.herokuapp.com/">
            Saltiest HackerNews Trolls
          </a>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/logout">Logout</Link>
        </div>
      );

    if (this.props.isAuthed) {
      return (
        <div className="navbar">
          <a className="logo" href="https://buildweek-saltytrolls.herokuapp.com/">
            Saltiest HackerNews Trolls
          </a>
          <Link to="/">Hacker List</Link>
          <Link to="/logout">Logout</Link>
          <Link to="/user">My Profile</Link>
        </div>
      );
    }
  }
}
