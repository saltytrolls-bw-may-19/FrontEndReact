import React from "react";
import { Link } from "react-router-dom";
import "./Hacker.scss";

import Chart from "./Chart";
const Hacker = props => {
  return (
    <div>
      <div className="hacker">
        <Link to="/hacker/:id">
          <h4>Username: {props.hacker.HackerUsername}</h4>
          <h4>Average Sentiment: {props.hacker.HackerSentiment}</h4>
          <p>Number of comments: {props.hacker.HackerCommentCount}</p>
          <div className="sentiment-graph">
            <Chart
              dataKey={props.hacker.HackerUsername}
              sentiment={props.hacker.HackerSentiment}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Hacker;
