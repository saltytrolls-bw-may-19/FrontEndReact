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
      searchedHacker: [{ author: "Zak", sentiment: 0.1034997559, num_comments: 1848 }, { author: "pg", sentiment: 0.090097317, num_comments: 9982 }],
      searchedHackerComments: [
        [
          { author: "Zak", sentiment: -0.8, ranking: 1, time: 1306966746, comment: "I wouldnt mind having an agent Looking for work is annoying" },
          { author: "Zak", sentiment: -0.7, ranking: 0, time: 1194058875, comment: "Did your friends say what it was they hated about …lt tasks they were being asked to perform with it" },
          { author: "Zak", sentiment: -0.7, ranking: 1, time: 1195064168, comment: "I wouldnt be shocked if it becomes the example app provided with Arc" },
          { author: "Zak", sentiment: -0.7, ranking: 0, time: 1306559980, comment: "One would hope youre storing the passwords as salt…ed no matter how bad you are at database security" },
          { author: "Zak", sentiment: -0.6666666667, ranking: 7, time: 1268235683, comment: "iWrite code that returns the length of a string wi…ask in Lisp or Haskell would be nearly impossible" },
          { author: "Zak", sentiment: -0.65625, ranking: 3, time: 1247698483, comment: "It was irresponsible of Palm to do so That doesnt …entionally break syncing with a thirdparty device" },
          { author: "Zak", sentiment: -0.5333333333, ranking: 0, time: 1306516672, comment: "I think the reason people object to this behavior …experts for whom its intended to make life easier" },
          { author: "Zak", sentiment: -0.5, ranking: 18, time: 1286864055, comment: "People who say X is 95 of Y are 95 wrong" },
          { author: "Zak", sentiment: -0.5, ranking: 0, time: 1354602114, comment: "It is illegal in the US to refuse to honor a warra…httpenwikipediaorgwikiMagnusonE28093MossWarrantya" }
        ],
        [
          { author: "pg", sentiment: -0.8, ranking: 1, time: 1306966746, comment: "I wouldnt mind having an agent Looking for work is annoying" },
          { author: "pg", sentiment: -0.7, ranking: 0, time: 1194058875, comment: "Did your friends say what it was they hated about …lt tasks they were being asked to perform with it" },
          { author: "pg", sentiment: -0.7, ranking: 1, time: 1195064168, comment: "I wouldnt be shocked if it becomes the example app provided with Arc" },
          { author: "pg", sentiment: -0.7, ranking: 0, time: 1306559980, comment: "One would hope youre storing the passwords as salt…ed no matter how bad you are at database security" },
          { author: "pg", sentiment: -0.6666666667, ranking: 7, time: 1268235683, comment: "iWrite code that returns the length of a string wi…ask in Lisp or Haskell would be nearly impossible" },
          { author: "pg", sentiment: -0.65625, ranking: 3, time: 1247698483, comment: "It was irresponsible of Palm to do so That doesnt …entionally break syncing with a thirdparty device" },
          { author: "pg", sentiment: -0.5333333333, ranking: 0, time: 1306516672, comment: "I think the reason people object to this behavior …experts for whom its intended to make life easier" },
          { author: "pg", sentiment: -0.5, ranking: 18, time: 1286864055, comment: "People who say X is 95 of Y are 95 wrong" },
          { author: "pg", sentiment: -0.5, ranking: 0, time: 1354602114, comment: "It is illegal in the US to refuse to honor a warra…httpenwikipediaorgwikiMagnusonE28093MossWarrantya" }
        ]
      ],
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

  //Search Hacker
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
