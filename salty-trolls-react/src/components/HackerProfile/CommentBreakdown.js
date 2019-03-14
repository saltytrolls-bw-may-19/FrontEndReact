import React from "react";

//Styling
import "./HackerProfile.scss";

//Component
const CommentBreakdown = props => {
  return (
    <div className="details">
      <p className={"text"}>{props.details.text}</p>
      <p className="icon">
        <h3>Sentimet Score</h3>
        <div className={props.details.sentiment >= 0 ? "green" : "red"}>{props.details.sentiment.toFixed(3)}</div>
      </p>
    </div>
  );
};

export default CommentBreakdown;
