import React from "react";
import { Link } from "react-router-dom";
import Chart from "../Chart/Chart";

//Styling
import "./Hacker.scss";
import { Button } from "semantic-ui-react";
//Component
class Hacker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    };
  }

  //Mouseover graph shows the explanatin of sentiment
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
        <div className="hacker relative-position">
          <Link to="/hacker">
            <div className="hacker-text">
              <h4>Username: {this.props.hacker.author}</h4>
              <p className="bold">Average Sentiment: {this.props.hacker.sentiment.toFixed(3)}</p>
              <p>Number of comments: {this.props.hacker.num_comments}</p>
              <Button>See 10 saltiest comments</Button>
              <div className="info-list" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                ⓘ
              </div>
            </div>

            <div>
              <Chart dataKey="value" sentiment={this.props.hacker.sentiment} />

              {this.state.isHovering && (
                <div className="index-card-list">
                  <span className="emphasis">Sentiment Scores range from -1 to 1. </span>
                  <br /> -1 represents a very salty troll, and 1 representing an exemplary model of comment etiquette.
                </div>
              )}
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default Hacker;
