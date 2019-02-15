import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchGifs } from './SearchActions';
import './styles.scss';

export class Search extends Component {

  static propTypes = {
    fetchGifs: PropTypes.func.isRequired
  };

  state = {
    query: ''
  };

  onInputChange = event => {
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
