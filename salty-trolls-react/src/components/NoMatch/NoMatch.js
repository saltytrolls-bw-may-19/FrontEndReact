import React from 'react';
import { Link } from 'react-router-dom';
//Styling
import './NoMatch.scss';

export default function NoMatch({ location }) {
  return (
    <div className="full-screen-div">
      <h3>
        No match for{' '}
        <code>
          {location.pathname}. Return to <Link to="/">main site </Link>and use searchbar to get some salt
        </code>
      </h3>
    </div>
  );
}
