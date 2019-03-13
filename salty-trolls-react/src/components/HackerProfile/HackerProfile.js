import React from 'react';
import './HackerProfile.scss';
import Sidebar from '../Sidebar/Sidebar';
import CommentBreakdown from './CommentBreakdown';

class HackerProfile extends React.Component {
  constructor() {
    super();
    this.setState = {
      details: []
    };
  }
  componentDidMount() {
    this.props.getHackersDetails();
  }

  render() {
    return (
      <div className="hacker-profile">
        <Sidebar />
        <div className="right-column">
          <h2>{`${this.props.currentAuthor}'s`} Profile</h2>
          {/* {this.hackersDetails} */}
          {/* {this.props.hackersDetails.author} */}
          {this.props.hackersDetails.map(details => {
            return <CommentBreakdown key={details.time} details={details} />;
          })}
        </div>
      </div>
    );
  }
}
export default HackerProfile;
