import React from "react";
import { Link } from "react-router-dom";
import "./Hacker.scss";

import Chart from "./Chart";
const Hacker = props => {
  return (
    <div>
      <div className="hacker">
        <Link to="/hacker/:id">
          <h4>Username: {props.hacker.author}</h4>
          <h4>Average Sentiment: {props.hacker.sentiment}</h4>
          <p>Number of comments: {props.hacker.num_comments}</p>
          <div className="sentiment-graph">
            <Chart dataKey="value" sentiment={props.hacker.sentiment} />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Hacker;
