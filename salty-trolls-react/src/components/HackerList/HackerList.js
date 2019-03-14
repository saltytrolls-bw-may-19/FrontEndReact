import React from "react";

//Import components
import Hacker from "../Hacker/Hacker";
import Search from "../Search/Search";
import Sidebar from "../Sidebar/Sidebar";

//Styling
import "./HackerList.scss";

//Starting data
import listUsers from "../../DataCollection/HackerListUsers";

//Component
class HackerList extends React.Component {
  //Protecting Routes - if not logged in, redirect to login
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

  //Rendering
  render() {
    return (
      <div className="hacker-list">
        <div className="hacker-content">
          <Sidebar />
          <div className="right-column">
            <h1>The Saltiest Hackers</h1>
            <Search searchedHacker={this.props.searchedHacker} searchedHackerComments={this.props.searchedHackerComments} />
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
