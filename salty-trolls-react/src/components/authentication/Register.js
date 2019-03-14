import React from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';

const url = 'https://buildweek-saltytrolls.herokuapp.com';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoginEmail: '',
      userLoginPassword: '',
      verifyPassword: ''
    };
  }

  handleChanges = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  registerNewUser = () => {
    if (this.state.userLoginPassword === this.state.verifyPassword) {
      axios
        .post(`${url}/api/users/register`, {
          UserEmail: this.state.userLoginEmail,
          UserPassword: this.state.userLoginPassword
        })
        .then(res => console.log(res))

        .then(() => this.props.history.push('/login'))
        .catch(err => {
          console.log(err.msg);
        });
    } else {
      return 'Passwords do not match.';
    }
  };

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
        </form>
      </div>
    );
  }
}

export default Register;
