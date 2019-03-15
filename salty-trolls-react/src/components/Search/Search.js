import React from "react";

//Styling
import "./Search.scss";
import { Button } from "semantic-ui-react";

//Component
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  handleChanges = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  //Rendering
  render() {
    return (
      <div className="search">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.searchHacker();
          }}>
          <input className="search-input" type="text" placeholder="&#128270;Search Salty Hackers" name="search" value={this.hacker} onChange={e => this.handleChanges(e)} />
          <Button
            id="main-button"
            onClick={e => {
              e.preventDefault();
              this.props.searchHacker(this.state.search);
            }}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
export default Search;
