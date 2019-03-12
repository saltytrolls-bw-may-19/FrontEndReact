import React from 'react';
import { Link } from 'react-router-dom';
import './Hacker.scss';
import { Progress } from 'semantic-ui-react';

const Hacker = props => {
  console.log(props);
  return (
    <div>
      <div className="hacker-dummy">
        <Link to="/hacker/:id">
          <h4>{props.hacker.HackerUsername}</h4>
          <h4>{props.hacker.HackerSentiment}</h4>
          <p>{props.hacker.HackerCommentCount}</p>
          <div className="sentiment-graph">
            <Progress className="progressbar" percent={83} progress color="green" />
          </div>
        </Link>
        {/* <div className="hacker">
        <Link to="/hacker:id">
          <h4>Hacker: Genevra</h4>
          <p>Sentiment: -0.07</p>
          <Progress className="progressbar" percent={83} progress color="green" />
        </Link>
      </div> */}
      </div>
    </div>
  );
};
export default Hacker;
