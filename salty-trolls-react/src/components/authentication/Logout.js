import React from 'react';

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
      <div>
        <div>Are you sure you want to logout</div>
        <button
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
