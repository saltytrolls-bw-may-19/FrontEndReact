import React from "react";
import Hacker from "../Hacker/Hacker";
import Search from "../Search/Search";
import Sidebar from "../Sidebar/Sidebar";
import "./HackerList.scss";

class HackerList extends React.Component {
  componentDidMount() {
    this.props.getHackers();
  }

  render() {
    console.log(this.props.hackerList);
    return (
      <div className="hacker-content">
        <Sidebar />
        <div className="right-column">
          <h1>The Saltiest Hackers</h1>
          <Search />
          <Hacker hacker={this.props.hackerList} />
          {/* {this.state.hackerList.map(hacker => {
            return <Hacker hacker={hacker} />;
          })} */}
          {/* <h4>HackerName: Example Hacker</h4>
          <h4>Sentiment: .06687</h4> */}
        </div>
      </div>
    );
  }
}

export default HackerList;
