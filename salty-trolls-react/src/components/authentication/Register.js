import React from "react";
import axios from "axios";

//Styling
import "./authentication.scss";
import { Button } from "semantic-ui-react";

//URL
const url = "https://buildweek-saltytrolls.herokuapp.com";

//Compnent
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoginEmail: "",
      userLoginPassword: "",
      verifyPassword: "",
      passwordsDontMatch: false,
      emailIsAlreadyRegistered: false
    };
  }

  handleChanges = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  //Register functionality
  registerNewUser = () => {
    if (this.state.userLoginPassword === this.state.verifyPassword) {
      this.setState({ emailIsAlreadyRegistered: false });
      this.setState({ passwordsDontMatch: false });
      axios
        .post(`${url}/api/users/register`, {
          UserEmail: this.state.userLoginEmail,
          UserPassword: this.state.userLoginPassword
        })
        .then(res => console.log(res))

        .then(() => this.props.history.push("/login"))

        .catch(err => {
          console.log(err.response.status);
          if (err.response.status === 422) {
            this.setState({ emailIsAlreadyRegistered: true });
          }
        });
    } else {
      this.setState({ passwordsDontMatch: true });
    }
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
          <h2>Register</h2>
          <input name="userLoginEmail" type="email" placeholder="Email" value={this.userLoginEmail} onChange={e => this.handleChanges(e)} />

          <input name="userLoginPassword" type="password" placeholder="Password" value={this.userLoginPassword} onChange={e => this.handleChanges(e)} />

          <input name="verifyPassword" type="password" placeholder="Verify password" value={this.verifyPassword} onChange={e => this.handleChanges(e)} />

          <Button
            id="main-button"
            onClick={event => {
              event.preventDefault();
              this.registerNewUser();
            }}>
            Register
          </Button>
          {this.state.passwordsDontMatch && <div className="error">Passwords don't match</div>}
          {this.state.emailIsAlreadyRegistered && <div className="error">Email is already registered</div>}
        </form>
      </div>
    );
  }
}

export default Register;
