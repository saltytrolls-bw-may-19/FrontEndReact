import React from 'react';
import { Link } from 'react-router-dom';
//Import componenrs
import Sidebar from '../Sidebar/Sidebar';
import CommentBreakdown from './CommentBreakdown';

//Styling
import './HackerProfile.scss';

//HackerProfile Component
class HackerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.isHackerinState = this.props.searchedHacker.find(hacker => hacker.author === this.props.match.params.id);
  }

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
    console.log(this.isHackerinState);
    //Created const author from this.props.match.params.id (route = /hacker/:id) => .../hacker/Zak => author=Zak
    const author = this.props.match.params.id;

    //Searching array of comments where the name of author matches the const author and map trough the array to create comments

    return (
      <div className="hacker-profile">
        {/* Sidebar for random salt comments */}
        <Sidebar />

        {/* List of saltiest comments of author */}
        <div className="hacker-column">
          {this.isHackerinState && (
            <div>
              <h2>{`${author}'s`} profile</h2>
              <h3>Saltiest Comments List</h3>
            </div>
          )}

          {!this.isHackerinState && (
            <div className="not-found-message">
              To see some salt, you need to search trough the<Link to="/"> searchbar first</Link>
            </div>
          )}
          {/* React Components => Comment Breakdown */}

          {this.isHackerinState &&
            this.props.searchedHackerComments.map((array, index) => {
              return (
                <React.Fragment key={index}>
                  {array
                    .filter(obj => obj.author === author)
                    .map(comment => (
                      <CommentBreakdown key={comment.time} details={comment} />
                    ))}
                </React.Fragment>
              );
            })}
        </div>
      </div>
    );
  }
}
export default HackerProfile;
