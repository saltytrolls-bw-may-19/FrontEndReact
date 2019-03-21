import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Styling
import './authentication.scss';
import { Button, Loader } from 'semantic-ui-react';

//URL
const url = 'https://buildweek-saltytrolls.herokuapp.com';

//Login Component
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userLoginEmail: '',
      userLoginPassword: '',
      invalidCredentials: false,
      loadingLogin: false
    };
  }

  //Protecting Routes - if logged in, redirect to main page
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.history.push('/');
    }
  }
  componentDidUpdate() {
    if (localStorage.getItem('token')) {
      this.props.history.push('/');
    }
  }

  //Login functionality
  handleChanges = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  //AXIOS call - login functionaluty
  loginUser = () => {
    this.setState({ invalidCredentials: false, loadingLogin: true });
    axios
      .post(`${url}/api/users/login`, {
        UserEmail: this.state.userLoginEmail,
        UserPassword: this.state.userLoginPassword
      })
      .then(res => {
        this.props.authUser(res.data.token, res.data.UserID, res.data.UserEmail);
        this.setState({ loadingLogin: false });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err.response.status);
        if (err.response.status === 401) {
          this.setState({ invalidCredentials: true, loadingLogin: false });
        }
      });
  };

  //Rendering
  render() {
    return (
      <div className="container">
        <form className="authentication-form">
          <h2>Login</h2>

          {/*Error handlign */}
          {this.state.invalidCredentials && <div className="error">Invalid credentials</div>}
          <input className="input" placeholder="Email" type="email" value={this.state.userLoginEmail} name="userLoginEmail" onChange={e => this.handleChanges(e)} />
          <input className="input" placeholder="Password" type="password" value={this.state.userLoginPassword} name="userLoginPassword" onChange={e => this.handleChanges(e)} />

          {/*Login Button -> handlign login */}
          <Button
            id="main-button"
            onClick={e => {
              e.preventDefault();
              this.loginUser();
            }}>
            Submit
          </Button>

          {/*Link to Register - if usser don't have account */}
          <Link className="redirect-text" to="/register">
            Don't have accout? Register!
          </Link>

          {/*Loader - active if loading */}
          {this.state.loadingLogin && (
            <div>
              <Loader active inline />
            </div>
          )}
        </form>
      </div>
    );
  }
}
