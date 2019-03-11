import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userLoginEmail: "",
      userLoginPassword: ""
    };
  }

  handleChanges = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  loginUser = () => {
    /* axios
      .post("url", {
        email: this.state.userLoginEmail,
        password: this.state.userLoginPassword
      })
      .then(res => {
        this.props.authUser(res.data.token);
      })
      .catch(err => console.log(err.message));*/

    this.props.authUser("123 test token");
  };

  render() {
    if (this.props.isAuthed) {
      return <div>You're already logged in.</div>;
    }

    return (
      <div>
        <form>
          <div>
            Email1:
            <input
              placeholder="email"
              type="email"
              value={this.state.userLoginEmail}
              name="userLoginEmail"
              onChange={e => this.handleChanges(e)}
            />
          </div>

          <div>
            Password:
            <input
              placeholder="password"
              type="password"
              value={this.state.userLoginPassword}
              name="userLoginPassword"
              onChange={e => this.handleChanges(e)}
            />
          </div>
          <input
            type="submit"
            onClick={event => {
              event.preventDefault();
              this.loginUser();
            }}
          />
        </form>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}
