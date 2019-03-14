import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//Styling
import "./authentication.scss";
import { Button } from "semantic-ui-react";

//URL
const url = "https://buildweek-saltytrolls.herokuapp.com";

//Component
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

  //Login functionality
  loginUser = () => {
    axios
      .post(`${url}/api/users/login`, {
        UserEmail: this.state.userLoginEmail,
        UserPassword: this.state.userLoginPassword
      })
      .then(res => {
        this.props.authUser(res.data.token, res.data.UserID, res.data.UserEmail);
        this.props.history.push("/");
      })
      .catch(err => console.log(err.msg));
  };

  //Protecting Routes - if logged in, redirect to main page
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

  //Rendering
  render() {
    return (
      <div className="container">
        <form className="authentication-form">
          <h2>Login</h2>
          <input className="input" placeholder="Email" type="email" value={this.state.userLoginEmail} name="userLoginEmail" onChange={e => this.handleChanges(e)} />

          <input className="input" placeholder="Password" type="password" value={this.state.userLoginPassword} name="userLoginPassword" onChange={e => this.handleChanges(e)} />

          <Button
            id="main-button"
            onClick={e => {
              e.preventDefault();
              this.loginUser();
            }}>
            Submit
          </Button>
          <Link className="redirect-text" to="/register">
            Don't have accout? Register!
          </Link>
        </form>
      </div>
    );
  }
}
