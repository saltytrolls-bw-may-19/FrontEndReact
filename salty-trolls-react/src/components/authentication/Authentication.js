import React from "react";
import axios from "axios";
import Login from "./Login";
import Register from "./Register";
class Authentication extends React.Component {
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
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  loginUser = () => {
    axios
      .post("url", {
        email: this.state.userLoginEmail,
        password: this.state.userLoginPassword
      })
      .then(res => localStorage.setItem("token", res.data.token))
      .catch(err => console.log(err.message));
  };

  render() {
    return (
      <div className="authentication">
        <Login
          handleChanges={this.handleChanges}
          userLoginEmail={this.state.userLoginEmail}
          userLoginPassword={this.state.userLoginPassword}
        />
        <Register
          handleChanges={this.handleChanges}
          userLoginEmail={this.state.userLoginEmail}
          userLoginPassword={this.state.userLoginPassword}
        />
      </div>
    );
  }
}
export default Authentication;
