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
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    }
    this.props.getHackersDetails();
  }

  componentDidUpdate() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div className="hacker-profile">
        <div className="left-column">
          <Sidebar />
        </div>
        <div className="right-column">
          {this.props.currentAuthor ? (
            <h2>{`${this.props.currentAuthor}'s`} Profile</h2>
          ) : (
            <h2>Hacker Profile</h2>
          )}

          {this.props.hackersDetails.map(details => {
            return <CommentBreakdown key={details.time} details={details} />;
          })}
        </div>
      </div>
    );
  }
}
export default HackerProfile;
