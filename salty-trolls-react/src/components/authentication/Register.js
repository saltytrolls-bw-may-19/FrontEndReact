import React from 'react';
import axios from 'axios';

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
        .post('url', {
          email: this.state.userLoginEmail,
          password: this.state.userLoginPassword
        })
        .then(res => {
          console.log(res);
          localStorage.setItem('token', res.data.token);
        })
        .then(() => this.props.history.push('/login'))
        .catch(err => {
          console.log(err.message);
        });
    } else {
      return 'Passwords do not match.';
    }
  };

  componentDidMount() {
    if (this.props.isAuthed) {
      this.props.history.push('/');
    }
  }

  componentDidUpdate() {
    if (this.props.isAuthed) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="container">
        <form className="authentication-form">
          <div>
            Email:
            <input name="email" type="text" placeholder="email" value={this.userLoginEmail} onChange={e => this.handleChanges(e)} />
          </div>
          <div>
            Password:
            <input name="password" type="password" placeholder="password" value={this.userLoginPassword} onChange={e => this.handleChanges(e)} />
          </div>
          <div>
            Verify Password:
            <input name="verifyPassword" type="password" placeholder="verify password" value={this.verifyPassword} onChange={e => this.handleChanges(e)} />
          </div>
          <button className="main-button" onClick={this.registerNewUser}>
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
