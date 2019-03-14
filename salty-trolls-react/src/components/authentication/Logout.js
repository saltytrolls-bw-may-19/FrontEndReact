import React from 'react';

//Styling
import './authentication.scss';
import { Button } from 'semantic-ui-react';

//Component
export default class Logout extends React.Component {
  //Protecting Routes - if not logged in, redirect to login
  componentDidMount() {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/login');
    }
  }

  componentDidUpdate() {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/login');
    }
  }

  //Rendering
  render() {
    return (
      <div className="container">
        <h2>Are you sure you want to logout?</h2>
        <br />
        <Button
          id="main-button"
          onClick={e => {
            e.preventDefault();
            this.props.unAuthUser();
            this.props.history.push('/login');
          }}>
          YES
        </Button>
      </div>
    );
  }
}
