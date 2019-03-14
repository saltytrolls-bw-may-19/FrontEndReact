import React, { Component } from "react";

//Styling
import "./Sidebar.scss";
import { Button } from "semantic-ui-react";

//Seeding Data
import randomCommentArr from "../../DataCollection/randomComment";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomComment:
        "So the fact that the source isnt there is proof that copyright prevented it I may have a tiger repellent rock to sell youpYou need to provide evidence that the source of the Mac OS Oracle or DB2 would be there if copyright didnt exist"
    };
  }
  randomizeComment = () => {
    this.setState({ randomComment: randomCommentArr[Math.floor(Math.random() * randomCommentArr.length)] });
  };
  render() {
    return (
      <div className="sidebar">
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
