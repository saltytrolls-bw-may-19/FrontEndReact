import React, { Component } from "react";
import randomCommentArr from "../../DataCollection/randomComment";
import "./Sidebar.scss";
export default class Sidebar extends Component {
  render() {
    var randomComment =
      randomCommentArr[Math.floor(Math.random() * randomCommentArr.length)];
    return (
      <div className="sidebar">
        <h3 className="data-key">
          Sentiment Scores range from -1 to 1, -1 representing a very salty
          troll, and 1 representing an exemplary model of comment etiquette.{" "}
        </h3>
        <h3>Random Salt</h3>
        <h3>{randomComment}</h3>

        {/* <h2>AI powered sentiment analysis of HackerNews users</h2>
        <h3>500,000 commments</h3>
        <h3>20,000 users</h3>
        <h3>Average saltiness 10</h3> */}
      </div>
    );
  }
}
