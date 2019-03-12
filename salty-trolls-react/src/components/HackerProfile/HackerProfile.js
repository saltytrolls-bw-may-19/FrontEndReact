import React from 'react';
import './HackerProfile.scss';

class HackerProfile extends React.Component {
  componentDidMount() {
    this.props.getHackersDetails();
  }
  render() {
    console.log(this.props);
    return (
      //We need to map trough the arrays and list each comment and it's sentiment analysis.
      //I think it is okay to display user's name just once :)

      <div>It works!</div>
      // <div className="hacker-profile">
      //   <h2>Hacker Profile</h2>
      //   {/* <h2>Hacker Name: {this.hacker.name}</h2>
      //   <h2>Average Comment Sentiment: {this.hacker.sentiment}</h2>
      //   <h2>Total Comments: {this.hacker.comments}</h2> */}
      //   <h2>Hacker Name: {this.hacker.HackerUsername}</h2>
      //   <h2>Average Comment Sentiment: {this.hacker.HackerSentiment}</h2>
      //   <h2>Total Comments: {this.hacker.HackerCommentCount}</h2>
      // </div>
    );
  }
}
export default HackerProfile;
