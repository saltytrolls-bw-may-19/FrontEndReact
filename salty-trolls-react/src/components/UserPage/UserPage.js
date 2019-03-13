import React from "react";
import axios from "axios";
import "./UserPage.scss";

const url = "https://buildweek-saltytrolls.herokuapp.com";
export default class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChangePassword: false,
      showDeleteAccount: false,
      userLoginPassword: "",
      verifyPassword: ""
    };
  }

  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    }
  }

  componentDidUpdate() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    }
  }

  getAuthToken = () => ({
    headers: { Authorization: localStorage.getItem("token") }
  });

  updateEmail = () => {
    if (this.state.userLoginPassword === this.state.verifyPassword) {
      axios
        .patch(
          `${url}/api/users/${localStorage.getItem("currentUserId")}/password`,
          {
            UserPassword: this.state.userLoginPassword
          },
          this.getAuthToken()
        )
        .then(res => console.log(res))
        .then(() => this.props.history.push("/login"))
        .catch(err => {
          console.log(err.msg);
        });
    } else {
      return "Passwords do not match.";
    }
  };

  deleteAccount = () => {
    axios
      .delete(
        `${url}/api/users/${localStorage.getItem("currentUserId")}`,
        this.getAuthToken()
      )
      .then(() => {
        this.props.unAuthUser();
      })
      .then(() => this.props.history.push("/register"))
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

  render() {
    return (
      <div>
        <h1>User Page</h1>
        <button
          className="main-button"
          onClick={e => {
            this.showPasswordForm(e);
          }}
        >
          Change Password
        </button>
        <button
          className="main-button"
          onClick={e => {
            this.showDeleteAccountForm(e);
          }}
        >
          Delete Account
        </button>
        {this.state.showChangePassword && (
          <form>
            <div>
              New password:{" "}
              <input
                name="userLoginPassword"
                type="password"
                placeholder="password"
                value={this.userLoginPassword}
                onChange={e => this.handleChanges(e)}
              />
            </div>
            <div>
              Confirm new password:{" "}
              <input
                name="verifyPassword"
                type="password"
                placeholder="verify password"
                value={this.verifyPassword}
                onChange={e => this.handleChanges(e)}
              />
            </div>
            <button
              className="main-button"
              onClick={e => {
                e.preventDefault();
                this.updateEmail();
              }}
            >
              Submit
            </button>
          </form>
        )}

        {this.state.showDeleteAccount && (
          <form>
            <h2>Are you sure?</h2>
            <button
              className="main-button"
              onClick={e => {
                e.preventDefault();
                this.deleteAccount();
              }}
            >
              Delete
            </button>
          </form>
        )}
      </div>
    );
  }
}
