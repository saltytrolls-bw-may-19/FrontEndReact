import React, { Component } from 'react';
import './Sidebar.scss';
export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h2>AI powered sentiment analysis of HackerNews users</h2>
        <h3>500,000 commments</h3>
        <h3>20,000 users</h3>
        <h3>Average saltiness 10</h3>
      </div>
    );
  }
}
