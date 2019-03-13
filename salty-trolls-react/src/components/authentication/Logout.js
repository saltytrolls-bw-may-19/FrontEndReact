import React from 'react';
import './authentication.scss';

export default class Logout extends React.Component {
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
      <div className="container">
        <h2>Are you sure you want to logout</h2>
        <br />
        <button
          className="main-button"
          onClick={e => {
            e.preventDefault();
            this.props.unAuthUser();
          }}>
          YES
        </button>
      </div>
    );
  }
}
