import React from "react";
import "./HackerProfile.scss";
import Sidebar from "../Sidebar/Sidebar";
import CommentBreakdown from "./CommentBreakdown";

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
    // console.log(this.props.hackersDetails[1]);

    return (
      //We need to map trough the arrays and list each comment and it's sentiment analysis.
      //I think it is okay to display user's name just once :)

      <div className="hacker-profile">
        <Sidebar />
        <div className="right-column">
          <h2>Hacker Profile</h2>
          {/* {this.hackersDetails} */}
          {/* {this.props.hackersDetails.author} */}
          {this.props.hackersDetails.map(details => {
            return <CommentBreakdown details={details} />;
          })}
        </div>
      </div>
    );
  }
}
export default HackerProfile;
