import React from "react";
import Hacker from "../Hacker/Hacker";
import Search from "../Search/Search";
import Sidebar from "../Sidebar/Sidebar";
import "./HackerList.scss";
import listUsers from "../../DataCollection/HackerListUsers";
class HackerList extends React.Component {
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    }
    this.props.getHackers();
  }

  componentDidUpdate() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    }
  }

  render() {
    // console.log(this.props.hackerList);
    return (
      <div className="hacker-list">
        <div className="hacker-content">
          <Sidebar />
          <div className="right-column">
            <h1>The Saltiest Hackers</h1>
            <Search
              searchedHacker={this.props.searchedHacker}
              searchedHackerComments={this.props.searchedHackerComments}
            />
            {/* <Hacker hacker={this.props.hackerList} /> */}

            {listUsers.map((item, index) => {
              return <Hacker key={index} hacker={item} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HackerList;
