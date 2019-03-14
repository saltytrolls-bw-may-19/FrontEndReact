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

//Component
class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: true,
      hackerList: null,
      hackersDetails: [],
      searchedHacker: null,
      searchedHackerComments: null,
      errorMessage: null,
      commenterNotFound: false
    };
  }
  startLoader = () => {
    this.setState({ loaded: false });
  };
  stopLoader = () => {
    this.setState({ loaded: true });
  };
  //Search Hacker
  searchHacker = name => {
    this.startLoader();
    axios
      .get(`http://kevinbrack.com:1337/user/${name}`)
      .then(res => {
        if (res.data[0] === "C") {
          this.setState(() => ({ commenterNotFound: true }));
        } else {
          this.setState(() => ({ searchedHacker: res.data.user, searchedHackerComments: res.data.comments, commenterNotFound: false }));
          console.log(res.data);
        }
        this.stopLoader();
      })
      .catch(err => {
        console.log(err.message);
        this.stopLoader();
      });
  };

  // //Getting general data from server
  // getHackers = () => {
  //   this.setState({ loading: true });
  //   axios
  //     .get("https://buildweek-saltytrolls.herokuapp.com/api/hackers/:id")
  //     .then(res => {
  //       this.setState(() => ({ hackerList: res.data }));
  //     })
  //     .catch(err => {
  //       console.log(err.message);
  //     })
  //     .finally(this.setState({ loading: false }));
  // };

  //Getting Hacker specific data from the server
  getHackersDetails = () => {
    axios
      .get("https://buildweek-saltytrolls.herokuapp.com/api/hackers/:id/details")
      .then(res => {
        console.log(res);
        this.setState(() => ({
          hackersDetails: res.data,
          currentAuthor: res.data[0].author
        }));
      })
      .catch(err => {
        console.log(err.message);
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
        {/* <Sidebar /> */}
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
            path="/hacker"
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
