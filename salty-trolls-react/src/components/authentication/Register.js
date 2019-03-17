import React from "react";
import axios from "axios";

//Styling
import "./authentication.scss";
import { Loader, Button } from "semantic-ui-react";

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
      emailIsAlreadyRegistered: false,
      loadingRegister: false
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
      this.setState({ emailIsAlreadyRegistered: false, loadingRegister: true, passwordsDontMatch: false });
      axios
        .post(`${url}/api/users/register`, {
          UserEmail: this.state.userLoginEmail,
          UserPassword: this.state.userLoginPassword
        })
        .then(res => {
          console.log(res);
        })

        .then(() => this.props.history.push("/login"))

        .catch(err => {
          console.log(err.response.status);
          if (err.response.status === 500) {
            this.setState({ emailIsAlreadyRegistered: true, loadingRegister: false });
          }
        });
    } else {
      this.setState({ passwordsDontMatch: true, loadingRegister: false });
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
            onClick={event => {
              event.preventDefault();
              this.registerNewUser();
            }}>
            Register
          </Button>
          {this.state.passwordsDontMatch && <div className="error">Passwords don't match</div>}
          {this.state.emailIsAlreadyRegistered && <div className="error">Email is already registered</div>}
          {this.state.loadingRegister && (
            <div>
              <Loader active inline />
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default Register;
