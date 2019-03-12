import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

export default class Navigation extends React.Component {
  render() {
    if (!this.props.isAuthed)
      return (
        <div className="navbar">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      );

    if (this.props.isAuthed) {
      return (
        <div className="navbar">
          <Link to="/">Hacker List</Link>
          <Link to="/logout">Logout</Link>
          <Link to="/user">
            Me{' '}
            <span role="img" aria-label="computer emoji">
              💻
            </span>
          </Link>
        </div>
      );
    }
  }
}
