import React from "react";

export default class Login extends React.Component {
  render() {
    return (
      <form>
        <div>
          Email:
          <input
            placeholder="email"
            type="email"
            value={this.props.userLoginEmail}
            name="userLoginEmail"
            onChange={e => this.props.handleChanges(e)}
          />
        </div>

        <div>
          Password:
          <input
            placeholder="password"
            type="password"
            value={this.props.userLoginPassword}
            name="userLoginPassword"
            onChange={e => this.props.handleChanges(e)}
          />
        </div>
        <input type="submit" />
      </form>
    );
  }
}
