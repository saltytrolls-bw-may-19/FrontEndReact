import React from "react";
import { Link } from "react-router-dom";
import AverageChart from "../Chart/AverageChart";

//Styling
import "./Hacker.scss";

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
        <div className="hacker">
          <Link to="/hacker">
            <div className="hacker-text">
              <h4>Username: {this.props.hacker.author}</h4>
              <p className="bold">Average Sentiment: {this.props.hacker.sentiment.toFixed(3)}</p>
              <p>Number of comments: {this.props.hacker.num_comments}</p>
            </div>

            <div className="relative-position" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
              <AverageChart dataKey="value" sentiment={this.props.hacker.sentiment} />

              {this.state.isHovering && (
                <div className="index-card">
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
