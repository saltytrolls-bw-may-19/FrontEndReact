import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./authentication.scss";

const url = "https://buildweek-saltytrolls.herokuapp.com";
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
    axios
      .post(`${url}/api/users/login`, {
        UserEmail: this.state.userLoginEmail,
        UserPassword: this.state.userLoginPassword
      })
      .then(res => {
        this.props.authUser(res.data.token, res.data.UserID);
        this.props.history.push("/");
      })
      .catch(err => console.log(err.msg));
  };

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.history.push("/");
    }
  }

  componentDidUpdate() {
    if (localStorage.getItem("token")) {
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
            onClick={e => {
              e.preventDefault();
              this.loginUser();
            }}
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
