import React from "react";
import "./HackerProfile.scss";
const CommentBreakdown = props => {
  const sentimentEmoji = e => {
    if (props.details.sentiment <= -0.7) {
      return <i class="thumbs down outline icon" />;
    } else {
      return <i class="trash alternate outline icon" />;
    }
  };
  return (
    <div className="details">
      <p className={"text"}>{props.details.text}</p>
      <p className="icon">
        {props.details.sentiment}
        {sentimentEmoji()}
      </p>
    </div>
  );
};

export default CommentBreakdown;
