import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchGifs } from './SearchActions';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const query = event.target.value;
    this.setState({ query });
    this.props.fetchGifs(query);
  }

  render() {
    console.log(this.props)
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

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  fetchGifs
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
