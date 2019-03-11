import React from "react";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoginEmail: "",
      userLoginPassword: "",
      verifyPassword: ""
    };
  }

  registerNewUser = () => {
    if (this.state.userLoginPassword === this.state.verifyPassword) {
      axios
        .post("url", {
          email: this.state.userLoginEmail,
          password: this.state.userLoginPassword
        })
        .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
        })
        .catch(err => {
          console.log(err.message);
        });
    } else {
      return "Passwords do not match.";
    }
  };

  render() {
    return (
      <form className="registration">
        Email:
        <input
          className="ui input"
          name="email"
          type="text"
          placeholder="email"
          value={this.userLoginEmail}
          onChange={e => this.props.handleChanges(e)}
        />
        Password:
        <input
          className="ui input"
          name="password"
          type="password"
          placeholder="password"
          value={this.userLoginPassword}
          onChange={e => this.props.handleChanges(e)}
        />
        Verify Password:
        <input
          className="ui input"
          name="verifyPassword"
          type="password"
          placeholder="verify password"
          value={this.verifyPassword}
          onChange={e => this.props.handleChanges(e)}
        />
        <button className="ui button" onClick={this.registerNewUser}>
          Register
        </button>
      </form>
    );
  }
}

export default Register;
