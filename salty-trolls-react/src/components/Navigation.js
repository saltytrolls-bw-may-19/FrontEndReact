import React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
  render() {
    if (this.props.isAuthed) {
      return (
        <div>
          <Link to="/">Hacker List</Link>
          <Link to="/logout">Logout</Link>
        </div>
      );
    }
    if (!this.props.isAuthed)
      return (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/logout">Logout</Link>
        </div>
      );
  }
}
