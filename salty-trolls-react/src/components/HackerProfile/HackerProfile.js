import React from "react";

//Import componenrs
import Sidebar from "../Sidebar/Sidebar";
import CommentBreakdown from "./CommentBreakdown";

//Styling
import "./HackerProfile.scss";

//Component
class HackerProfile extends React.Component {
  constructor() {
    super();
    this.setState = {
      details: []
    };
  }
  //Protecting Routes - if not logged in, redirect to login
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

  //Rendering
  render() {
    return (
      <div className="hacker-profile">
        <Sidebar />
        <div className="right-column">
          {this.props.currentAuthor ? <h2>{`${this.props.currentAuthor}'s`} Profile</h2> : <h2>Hacker Profile</h2>}
          <h3>Comment List</h3>

          {this.props.hackersDetails.map(details => {
            console.log(details);
            return <CommentBreakdown key={details.time} details={details} />;
          })}
        </div>
      </div>
    );
  }
}
export default HackerProfile;
