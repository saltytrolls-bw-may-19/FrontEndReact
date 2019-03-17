import React from "react";
import { Link } from "react-router-dom";
import Chart from "../Chart/Chart";

//Styling
import "./Hacker.scss";
import { Button } from "semantic-ui-react";

//Hacker Component
class Hacker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //isHovering state used for information about the sentiment analysis when hovering over ⓘ
      isHovering: false
    };
  }

  //Functions handling hovering functionality
  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  };
  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  //Rendering
  render() {
    return (
      <div>
        {/* Card with users info + graph => When clicked on card, user is redirected t specific hacker's comment sentiment analysis */}
        <div className="hacker relative-position">
          <Link to={`/hacker/${this.props.hacker.author}`}>
            {/* Left/Top part of the card => users info */}
            <div className="hacker-text">
              <h4>Username: {this.props.hacker.author}</h4>
              <p className="bold">Average Sentiment: {this.props.hacker.sentiment.toFixed(3)}</p>
              <p>Number of comments: {this.props.hacker.num_comments}</p>
              <Button>See 10 saltiest comments</Button>

              {/* ⓘ in left top corner => when hover, sentiment analysis is explained */}
              <div className="info-list" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                ⓘ
              </div>
            </div>

            {/* Bottom/Low part of the card => chart */}
            <Chart dataKey="value" sentiment={this.props.hacker.sentiment} />

            {/* Index card explaining the sentiment analysis when hovering*/}
            {this.state.isHovering && (
              <div className="index-card-list">
                <span className="emphasis">Sentiment Scores range from -1 to 1. </span>
                <br /> -1 represents a very salty troll, and 1 representing an exemplary model of comment etiquette.
              </div>
            )}
          </Link>
        </div>
      </div>
    );
  }
}
export default Hacker;
