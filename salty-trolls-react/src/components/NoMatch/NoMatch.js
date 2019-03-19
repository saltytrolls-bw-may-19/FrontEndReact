import React from 'react';
import { Link } from 'react-router-dom';
//Styling
import './NoMatch.scss';

export default function NoMatch({ location }) {
  return (
    <div className="full-screen-div">
      No match for{' '}
      <code className="no-match-text">
        {location.pathname}. Return to <Link to="/">main site </Link>and use searchbar to get some salt
      </code>
    </div>
  );
}
