import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import logo from '../img/st-logo-w.svg';

export default class Navigation extends React.Component {
  render() {
    if (!localStorage.getItem('token')) {
      return (
        <div className="navbar">
          <div className="navbar-left">
            <a className="logo" href="https://competent-wilson-ba0397.netlify.com/index.html">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="navbar-middle" />
          <div className="navbar-right">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      );
    }

    if (localStorage.getItem('token')) {
      return (
        <div className="navbar">
          <div className="navbar-left">
            <a className="logo" href="https://competent-wilson-ba0397.netlify.com/index.html">
              <img className="logo-img" src={logo} alt="logo" />
            </a>
            <Link to="/">Hacker List</Link>
          </div>
          <div className="navbar-middle" />
          <div className="navbar-right">
            <Link to="/user">Profile</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
      );
    }
  }
}
