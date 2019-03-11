import React, { Component } from "react";
import { Route } from "react-router-dom";

//components
import Authentication from "./components/authentication/Authentication";
import Navigation from "./components/Navigation";
import HackerList from "./components/HackerList";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" />
        <Route exact path="/login" render={pr => <Login {...pr} />} />
        <Route exact path="/register" render={pr => <Register {...pr} />} />
        <Route exact path="/hackerList" render={pr => <HackerList {...pr} />} />
        {/*STRETCH: <Route exact path="/:hacker" render={pr => <Hacker {...pr} />} /> */}
      </div>
    );
  }
}

export default App;
