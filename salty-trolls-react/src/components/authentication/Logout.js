import React from "react";
import "./authentication.scss";

export default class Logout extends React.Component {
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
  render() {
    return (
      <div className="container">
        <h2>Are you sure you want to logout</h2>
        <br />
        <button
          className="main-button"
          onClick={e => {
            e.preventDefault();
            this.props.unAuthUser();
            this.props.history.push("/login");
          }}
        >
          YES
        </button>
      </div>
    );
  }
}
