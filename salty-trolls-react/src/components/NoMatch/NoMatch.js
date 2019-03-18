import React from "react";

//Styling
import "./NoMatch.scss";

export default function NoMatch({ location }) {
  return (
    <div className="full-screen-div">
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
