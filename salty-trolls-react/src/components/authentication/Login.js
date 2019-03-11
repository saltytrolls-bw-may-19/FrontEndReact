import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoginEmail: "",
      userLoginPassword: ""
    };
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form>
        <div>
          Email:
          <input
            placeholder="email"
            type="email"
            value={this.state.userLoginEmail}
            name="userLoginEmail"
            onChange={event => {
              event.preventDefault();
              this.handleInputChange(event);
            }}
          />
        </div>

        <div>
          Password:
          <input
            placeholder="password"
            type="password"
            value={this.state.userLoginPassword}
            name="userLoginName"
            onChange={event => {
              event.preventDefault();
              this.handleInputChange(event);
            }}
          />
        </div>
        <input type="submit" />
      </form>
    );
  }
}
