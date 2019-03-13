import React from "react";
import { Link } from "react-router-dom";
// import axios from 'axios';
import "./authentication.scss";

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

    this.props.authUser("testtoken");
  };

  componentDidMount() {
    if (this.props.isAuthed) {
      this.props.history.push("/");
    }
  }

  componentDidUpdate() {
    if (this.props.isAuthed) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="container">
        <form className="authentication-form">
          <div>
            Email:
            <input
              className="input"
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
              className="input"
              placeholder="password"
              type="password"
              value={this.state.userLoginPassword}
              name="userLoginPassword"
              onChange={e => this.handleChanges(e)}
            />
          </div>
          <button
            className="main-button"
            type="submit"
            onClick={() => this.loginUser()}
          >
            Submit
          </button>
        </form>
        <button className="redirect-button">
          <Link className="redirect-text" to="/register">
            Register
          </Link>
        </button>
      </div>
    );
  }
}
