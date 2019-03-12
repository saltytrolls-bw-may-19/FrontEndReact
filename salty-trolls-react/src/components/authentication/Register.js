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
      <form className="registration">
        Email:
        <input className="ui input" name="email" type="text" placeholder="email" value={this.userLoginEmail} onChange={e => this.handleChanges(e)} />
        Password:
        <input className="ui input" name="password" type="password" placeholder="password" value={this.userLoginPassword} onChange={e => this.handleChanges(e)} />
        Verify Password:
        <input className="ui input" name="verifyPassword" type="password" placeholder="verify password" value={this.verifyPassword} onChange={e => this.handleChanges(e)} />
        <button className="ui button" onClick={this.registerNewUser}>
          Register
        </button>
      </form>
    );
  }
}

export default Register;
