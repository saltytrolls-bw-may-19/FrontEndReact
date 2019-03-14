import React from "react";
import { Link } from "react-router-dom";
//Import componenrs
import Sidebar from "../Sidebar/Sidebar";
import CommentBreakdown from "./CommentBreakdown";

//Styling
import "./HackerProfile.scss";

//Component
class HackerProfile extends React.Component {
  //Protecting Routes - if not logged in, redirect to login
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    }
  }

  componentDidUpdate() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    }
  }

  // this.props.searchedHacker
  // this.props.searchedHackerComments
  //Rendering
  render() {
    if (!this.props.searchedHacker) {
      return (
        <Link to="/">
          <div className="error-message">Click here and search for the hacker first</div>
        </Link>
      );
    }

    return (
      <div className="hacker-profile">
        <Sidebar />
        <div className="right-column">
          {this.props.searchedHacker.author ? <h2>{`${this.props.searchedHacker.author}'s`} profile</h2> : <h2>Hacker's Profile</h2>}
          <h3>Saltiest Comments List</h3>
          {this.props.searchedHackerComments.map(details => {
            console.log(details);
            return <CommentBreakdown key={details.time} details={details} />;
          })}
        </div>
      </div>
    );
  }
}
export default HackerProfile;
