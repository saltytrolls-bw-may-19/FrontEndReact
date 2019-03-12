import React from 'react';
import axios from 'axios';
import './UserPage.scss';

export default class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChangePassword: false,
      showDeleteAccount: false,
      userLoginPassword: '',
      verifyPassword: ''
    };
  }

  updateEmail = () => {
    if (this.state.userLoginPassword === this.state.verifyPassword) {
      axios
        .put('url', {
          password: this.state.userLoginPassword
        })
        .then(() => this.props.history.push('/login'))
        .catch(err => {
          console.log(err.message);
        });
    } else {
      return 'Passwords do not match.';
    }
  };

  deleteAccount = () => {
    axios
      .delete('url', {})
      .then(() => this.props.history.push('/register'))
      .catch(err => {
        console.log(err.message);
      });
  };

  showPasswordForm = e => {
    e.preventDefault();
    this.setState({ showChangePassword: true, showDeleteAccount: false });
  };

  showDeleteAccountForm = e => {
    e.preventDefault();
    this.setState({ showChangePassword: false, showDeleteAccount: true });
  };

  handleChanges = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    if (!this.props.isAuthed) {
      this.props.history.push('/');
    }
  }

  componentDidUpdate() {
    if (!this.props.isAuthed) {
      this.props.history.push('/');
    }
  }
  render() {
    return (
      <div>
        <h1>User Page</h1>
        <button
          className="main-button"
          onClick={e => {
            this.showPasswordForm(e);
          }}>
          Change Password
        </button>
        <button
          className="main-button"
          onClick={e => {
            this.showDeleteAccountForm(e);
          }}>
          Delete Account
        </button>
        {this.state.showChangePassword && (
          <form>
            <div>
              New password: <input name="password" type="password" placeholder="password" value={this.userLoginPassword} onChange={e => this.handleChanges(e)} />
            </div>
            <div>
              Confirm new password: <input name="verifyPassword" type="password" placeholder="verify password" value={this.verifyPassword} onChange={e => this.handleChanges(e)} />
            </div>
            <button className="main-button" onClick={this.updateEmail}>
              Submit
            </button>
          </form>
        )}

        {this.state.showDeleteAccount && (
          <form>
            <h2>Are you sure?</h2>
            <button className="main-button" onClick={this.deleteAccount}>
              Delete
            </button>
          </form>
        )}
      </div>
    );
  }
}
