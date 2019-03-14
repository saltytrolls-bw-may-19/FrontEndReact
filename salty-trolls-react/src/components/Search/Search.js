import React from 'react';
import './Search.scss';
import axios from 'axios';
import { Button } from 'semantic-ui-react';

// searchedHacker
// searchedHackerComments
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }
  handleChanges = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  searchHacker = () => {
    axios
      .get(`http://kevinbrack.com:1337/user/${this.state.search}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  render() {
    return (
      <div className="search">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.searchHacker();
          }}>
          <input className="search-input" type="text" placeholder="&#128270;Search Salty Hackers" name="search" value={this.hacker} onChange={e => this.handleChanges(e)} />
          <Button id="main-button">Submit</Button>
        </form>
      </div>
    );
  }
}
export default Search;
