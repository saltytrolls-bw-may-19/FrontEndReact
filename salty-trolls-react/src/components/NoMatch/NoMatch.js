import React from 'react';
import { Link } from 'react-router-dom';

// Import components

//Styling
import './NoMatch.scss';
import img from '../img/404.svg';

export default function NoMatch({ location }) {
  return (
    <div>
      <div className="full-screen-div">
        No match for{' '}
        <code className="no-match-text">
          {location.pathname}. Return to <Link to="/">main site </Link>and use searchbar to get some salt
        </code>
        <br />
        <img className="img-404" src={img} alt="Page doesn't exist" />
      </div>
    </div>
  );
}
