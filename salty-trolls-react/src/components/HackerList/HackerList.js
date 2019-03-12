import React from 'react';
import Hacker from '../Hacker/Hacker';
import axios from 'axios';
import Search from '../Search/Search';
import Sidebar from '../Sidebar/Sidebar';
import './HackerList.scss';

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
      <div className="main-content">
        <h1>The Saltiest Hackers</h1>
        <Search />
        <div className="hacker-content">
          <Sidebar />
          <Hacker />
          {/* {this.props.hackerList.map(hacker => { */}
          {/* return <Hacker hacker={hacker} />; */}
          {/* })} */}
          {/* <h4>HackerName: Example Hacker</h4>
        <h4>Sentiment: .06687</h4> */}
        </div>
      </div>
    );
  }
}

export default HackerList;
