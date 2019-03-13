import React from 'react';
import { Link } from 'react-router-dom';
import './Hacker.scss';
import { Progress } from 'semantic-ui-react';

const Hacker = props => {
  const sentimentNumber = Number(props.hacker.HackerSentiment);
  const sentimentPercentage = Math.round(Math.abs(sentimentNumber * 100));
  const sentimentColor = sentimentNumber < 0 ? 'red' : 'green';
  const sentimentEmoji = sentimentNumber < 0 ? '👍' : '👎';
  return (
    <div>
      <div className="hacker">
        <Link to="/hacker/:id">
          <h4>Username: {props.hacker.HackerUsername}</h4>
          <h4>Average Sentiment: {props.hacker.HackerSentiment}</h4>
          <p>Number of comments: {props.hacker.HackerCommentCount}</p>
          <div className="sentiment-graph">
            <Progress className="progress-bar" percent={sentimentPercentage} color={sentimentColor} progress />
            <div className="emoji">{sentimentEmoji}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Hacker;
