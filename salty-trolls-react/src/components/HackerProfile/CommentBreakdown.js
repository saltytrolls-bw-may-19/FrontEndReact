import React from "react";
import Chart from "../Chart/Chart";
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
      <div className="details relative-position">
        <div className="details-left-box">
          <p>{this.props.details.comment}</p>
          <p>
            Sentiment: <span className="bold">{this.props.details.sentiment.toFixed(3)}</span>
          </p>
          <div className="info-comment" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
            ⓘ
          </div>
        </div>

        <div>
          <Chart dataKey="value" sentiment={this.props.details.sentiment} />
          {this.state.isHovering && (
            <div className="index-card-comment">
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
