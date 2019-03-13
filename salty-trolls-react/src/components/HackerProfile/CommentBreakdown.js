import React from 'react';
import './HackerProfile.scss';
const CommentBreakdown = props => {
  const sentimentEmoji = e => {
    if (props.details.sentiment < 0) {
      return <i className="thumbs down outline icon" />;
    } else {
      return <i className="thumbs up outline icon" />;
    }
  };
  return (
    <div className="details">
      <p className={'text'}>{props.details.text}</p>
      <p className="icon">
        {`${Math.round(props.details.sentiment * 100)}%`}
        {sentimentEmoji()}
      </p>
    </div>
  );
};

export default CommentBreakdown;
