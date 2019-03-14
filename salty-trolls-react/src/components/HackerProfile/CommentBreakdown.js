import React from "react";
import Chart from "./Chart";

//Styling
import "./HackerProfile.scss";

//Component
class CommentBreakdown extends React.Component {
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
  render() {
    return (
      <div className="details">
        <div className="details-left-box">
          <p>{this.props.details.text}</p>
          <p>
            Sentiment: <span className="bold">{this.props.details.sentiment.toFixed(3)}</span>
          </p>
        </div>

        <div className="relative-position" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
          <Chart dataKey="value" sentiment={this.props.details.sentiment} />
          {this.state.isHovering && (
            <div className="index-card">
              <span className="emphasis">Sentiment Scores range from -1 to 1. </span>
              <br /> -1 represents a very salty troll, and 1 representing an exemplary model of comment etiquette.
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CommentBreakdown;
