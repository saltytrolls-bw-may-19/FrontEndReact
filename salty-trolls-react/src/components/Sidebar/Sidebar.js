import React, { Component } from "react";

//Styling
import "./Sidebar.scss";
import { Button } from "semantic-ui-react";

//Seeding Data
import randomCommentArr from "../../DataCollection/randomComment";

//Sidebar Component
export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomComment: "Stop filling up the comment threads with this crap"
    };
  }

  randomizeComment = () => {
    this.setState({ randomComment: randomCommentArr[Math.floor(Math.random() * randomCommentArr.length)] });
  };
  //Rendering
  render() {
    return (
      <div className="sidebar">
        {/* On click show random comment from the seeding database */}
        <Button
          id="main-button"
          onClick={e => {
            e.preventDefault();
            this.randomizeComment();
          }}>
          Show me some random salt!
        </Button>
        <div className="random-comment">"{this.state.randomComment}"</div>
      </div>
    );
  }
}
