import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/hackerList">Hacker List</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
}
