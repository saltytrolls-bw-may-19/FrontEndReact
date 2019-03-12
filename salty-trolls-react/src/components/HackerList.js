import React from 'react';
import Hacker from './Hacker';
import axios from 'axios';
class HackerList extends React.Component {
  constructor() {
    super();
    this.state = {
      hackerList: []
    };
  }
  // componentDidMount() {
  //   this.setState({hackerList: data});
  // }
  getHackers() {
    axios
      .get('url')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.message);
      });
  }
  render() {
    return (
      <div>
        <h1>The Saltiest Hackers</h1>
        <h2>Search Bar Here</h2>
        {/* {this.props.hackerList.map(hacker => { */}
        {/* return <Hacker hacker={hacker} />; */}
        {/* })} */}
        <h4>HackerName: Example Hacker</h4>
        <h4>Sentiment: .06687</h4>
      </div>
    );
  }
}

export default HackerList;
