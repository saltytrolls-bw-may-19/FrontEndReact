import React, { Component } from "react";
import Authentication from "./components/authentication/Authentication";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Authentication />
      </div>
    );
  }
}

export default App;
