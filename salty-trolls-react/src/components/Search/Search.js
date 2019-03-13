import React from 'react';
import './Search.scss';
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      hacker: ''
    };
  }
  handleChanges = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  // searchHacker = hacker => {
  //   axios
  //     .get()
  //     .then(res => {
  //       this.setState(() => ({hacker: res.data}))
  //     })
  //     .catch(err => {
  //       console.log(err.message)
  //     })
  // }
  render() {
    return (
      <div className="search">
        <input className="search-input" type="text" placeholder="&#128270;Search Salty Hackers" value={this.hacker} submit={this.searchHackersHandler} onChange={e => this.handleCanges(e)} />
      </div>
    );
  }
}
export default Search;
