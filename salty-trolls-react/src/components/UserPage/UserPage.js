import React from "react";
import axios from "axios";

//Styling
import "./UserPage.scss";
import { Button } from "semantic-ui-react";

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
  // Protecting Routes - if not logged in, redirect to login page
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

  //Update Password functionality
  updatePassword = () => {
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
  //Delete Account functionality
  deleteAccount = () => {
    axios
      .delete(`${url}/api/users/${localStorage.getItem("currentUserId")}`, this.getAuthToken())
      .then(() => {
        this.props.unAuthUser();
      })
      .then(() => this.props.history.push("/register"))
      .catch(err => {
        console.log(err.message);
      });
  };

  //Logic behind showing specific form for each action - Delete & Update Password
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

  //Rendering
  render() {
    return (
      <div className="user-page">
        <h1>
          Hello <span className="emphasize">{localStorage.getItem("UserEmail")}</span>!
        </h1>
        <div>
          <Button
            id="main-button"
            onClick={e => {
              this.showPasswordForm(e);
            }}>
            Change Password
          </Button>

          <Button
            id="main-button"
            onClick={e => {
              this.showDeleteAccountForm(e);
            }}>
            Delete Account
          </Button>
        </div>

        {/*Change Password Form */}
        {this.state.showChangePassword && (
          <form className="user-form">
            <input name="userLoginPassword" type="password" placeholder="New password" value={this.userLoginPassword} onChange={e => this.handleChanges(e)} />
            <input name="verifyPassword" type="password" placeholder="Confirm new password password" value={this.verifyPassword} onChange={e => this.handleChanges(e)} />
            <Button
              id="main-button"
              onClick={e => {
                e.preventDefault();
                this.updatePassword();
              }}>
              Submit
            </Button>
          </form>
        )}

        {/*Delete Account Form */}
        {this.state.showDeleteAccount && (
          <form className="user-form">
            <h2>Are you sure?</h2>
            <Button
              id="main-button"
              onClick={e => {
                e.preventDefault();
                this.deleteAccount();
              }}>
              Delete
            </Button>
          </form>
        )}
      </div>
    );
  }
}
