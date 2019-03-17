import React from "react";
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
    const author = this.props.match.params.id;

    return (
      <div className="hacker-profile">
        <Sidebar />
        <div className="hacker-column">
          {this.props.searchedHacker.author ? <h2>{`${this.props.searchedHacker.author}'s`} profile</h2> : <h2>Hacker's Profile</h2>}
          <h3>Saltiest Comments List</h3>

          {this.props.searchedHackerComments.map((array, index) => {
            return (
              <React.Fragment key={index}>
                {array
                  .filter(obj => obj.author === author)
                  .map(comment => (
                    <CommentBreakdown key={comment.time} details={comment} />
                  ))}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}
export default HackerProfile;
