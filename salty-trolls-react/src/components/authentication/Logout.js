import React from "react";

export default class Logout extends React.Component {
  render() {
    return (
      <div>
        <div>Are you sure you want to logout</div>
        <button
          onClick={e => {
            e.preventDefault();
            this.props.unAuthUser();
          }}
        >
          YES
        </button>
      </div>
    );
  }
}
