import React from "react";
import { Link } from "react-router-dom";
import "./Hacker.scss";
import { Progress } from "semantic-ui-react";

const Hacker = props => {
  console.log(props);
  return (
    <div>
      <div className="hacker">
        <Link to="/hacker/:id">
          <h4>Username: {props.hacker.HackerUsername}</h4>
          <h4>Average Sentiment: {props.hacker.HackerSentiment}</h4>
          <p>Number of comments: {props.hacker.HackerCommentCount}</p>
          <div className="sentiment-graph">
            <Progress
              className="progressbar"
              percent={65}
              progress
              color="green"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Hacker;
