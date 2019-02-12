import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchGifs } from './SearchActions';
import './styles.scss';

export class Search extends Component {
  state = {
    query: ''
  };

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const query = event.target.value;
    this.setState({ query });
    this.props.fetchGifs(query);
  }

  render() {
    return (
      <div className='search-bar'>
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
