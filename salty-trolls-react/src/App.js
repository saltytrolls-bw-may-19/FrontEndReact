import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

//Import components
import Navigation from "./components/Navigation/Navigation";
import HackerList from "./components/HackerList/HackerList";
import Login from "./components/authentication/Login";
import Logout from "./components/authentication/Logout";
import Register from "./components/authentication/Register";
import UserPage from "./components/UserPage/UserPage";
import HackerProfile from "./components/HackerProfile/HackerProfile";
import Footer from "./components/Footer/Footer";
import "./App.scss";

//Seeding data
import listHackers from "./DataCollection/Hackers";
import listComments from "./DataCollection/Comments";

//App Component + state
class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: true,
      hackerList: null,
      hackersDetails: [],
      searchedHacker: listHackers,
      searchedHackerComments: listComments,
      errorMessage: null,
      networkError: null,
      commenterNotFound: false
    };
  }

  //Loader
  startLoader = () => {
    this.setState({ loaded: false });
  };
  stopLoader = () => {
    this.setState({ loaded: true });
  };

  //Search Hacker - main feature
  searchHacker = name => {
    this.startLoader();
    this.setState({ commenterNotFound: false, networkError: false });
    axios
      .get(`http://kevinbrack.com:1337/user/${name}`)
      .then(res => {
        if (res.data[0] === "C") {
          this.setState(() => ({ commenterNotFound: true }));
        } else {
          this.setState(pr => ({ searchedHacker: [res.data.user, ...pr.searchedHacker], searchedHackerComments: [res.data.comments, ...pr.searchedHackerComments] }));
          //delete 10th hacker in the state => only 10 hackers on the screen
          this.state.searchedHacker.splice(10, 1);
          this.state.searchedHackerComments.splice(10, 1);
        }
        this.stopLoader();
      })
      .catch(err => {
        this.setState(() => ({ networkError: true }));
        console.log(err.message);
        this.stopLoader();
      });
  };

  //Authorization
  authUser = (token, id, email) => {
    localStorage.setItem("token", token);
    localStorage.setItem("currentUserId", id);
    localStorage.setItem("UserEmail", email);
  };

  unAuthUser = () => {
    localStorage.clear();
  };

  //Render + Routes
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/login" render={pr => <Login authUser={this.authUser} {...pr} />} />
        <Route exact path="/register" render={pr => <Register {...pr} />} />
        <Route exact path="/logout" render={pr => <Logout unAuthUser={this.unAuthUser} {...pr} />} />
        <Route exact path="/user" render={pr => <UserPage unAuthUser={this.unAuthUser} currentUserId={this.state.currentUserId} {...pr} />} />

        <div className="app-wrapper">
          <Route
            exact
            path="/"
            render={pr => (
              <HackerList
                commenterNotFound={this.state.commenterNotFound}
                networkError={this.state.networkError}
                searchHacker={this.searchHacker}
                searchedHacker={this.state.searchedHacker}
                hackerList={this.state.hackerList}
                getHackers={this.getHackers}
                loaded={this.state.loaded}
                {...pr}
              />
            )}
          />

          <Route
            exact
            path="/:id"
            render={pr => (
              <HackerProfile
                searchedHacker={this.state.searchedHacker}
                searchedHackerComments={this.state.searchedHackerComments}
                hackersDetails={this.state.hackersDetails}
                currentAuthor={this.state.currentAuthor}
                getHackersDetails={this.getHackersDetails}
                {...pr}
              />
            )}
          />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
