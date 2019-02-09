import React, { Component } from 'react';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          className='input'
          type='text'
          placeholder='Search Giphy...'
          value={this.state.query}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default Search;
