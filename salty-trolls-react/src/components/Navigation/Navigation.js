import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

export default class Navigation extends React.Component {
  render() {
    if (!localStorage.getItem("token")) {
      return (
        <div className="navbar">
          <a
            className="logo"
            href="https://competent-wilson-ba0397.netlify.com/index.html"
          >
            Saltiest HackerNews Trolls
          </a>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      );
    }

    if (localStorage.getItem("token")) {
      return (
        <div className="navbar">
          <a
            className="logo"
            href="https://competent-wilson-ba0397.netlify.com/index.html"
          >
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
