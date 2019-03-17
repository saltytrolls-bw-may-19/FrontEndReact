import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

//Import components
import Hacker from "../Hacker/Hacker";
import Search from "../Search/Search";
import Sidebar from "../Sidebar/Sidebar";

//Styling
import "./HackerList.scss";

//Starting data

//Component
class HackerList extends React.Component {
  //Protecting Routes - if not logged in, redirect to login
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    }
  }

  componentDidUpdate() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    }
  }

  //Rendering
  render() {
    if (this.props.loaded === true) {
      console.log(this.props.searchedHacker);
      return (
        <div className="hacker-list">
          <div className="hacker-content">
            <Sidebar />
            <div className="hacker-container">
              <h1>The Saltiest Hackers</h1>
              <Search searchHacker={this.props.searchHacker} searchedHacker={this.props.searchedHacker} searchedHackerComments={this.props.searchedHackerComments} />
              {this.props.commenterNotFound && <div className="not-found">Commenter not found</div>}
              {this.props.networkError && <div className="not-found">Network Error. Try again.</div>}
              {this.props.searchedHacker.map(hacker => {
                return <Hacker key={hacker.author} hacker={hacker} />;
              })}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="load-screen">
        <Dimmer active>
          <Loader className="loader" size="massive">
            Please be paitent while we sort through all this salt.
          </Loader>
        </Dimmer>
      </div>
    );
  }
}
export default HackerList;
