import React from "react";
import Hacker from "../Hacker/Hacker";
import Search from "../Search/Search";
import Sidebar from "../Sidebar/Sidebar";
import "./HackerList.scss";
import list from "../../DataCollection/Users";
class HackerList extends React.Component {
  componentDidMount() {
    this.props.getHackers();
  }

  render() {
    console.log(list[0]);
    // console.log(this.props.hackerList);
    return (
      <div className="hacker-content">
        <Sidebar />
        <div className="right-column">
          <h1>The Saltiest Hackers</h1>
          <Search
            searchedHacker={this.props.searchedHacker}
            searchedHackerComments={this.props.searchedHackerComments}
          />
          <Hacker hacker={this.props.hackerList} />

          {/* {list.map(item => {
            return <Hacker hacker={item} />;
          })} */}
        </div>
      </div>
    );
  }
}

export default HackerList;
