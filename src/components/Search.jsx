import React, { Component } from 'react';
import Giphy from '../common/Giphy';
import { Gif } from './Gif';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.renderGifs = this.renderGifs.bind(this);
  }

  onInputChange(event) {
    const query = event.target.value;
    const params = { q: query };
    Giphy.get('/search', { params })
      .then(res => this.setState({ results: res.data.data }))
      .catch(this.setState({ results: [] }));
    this.setState({ query });
  }

  renderGifs() {
    return this.state.results.map(i => {
      return <Gif gif={i} key={i.id} />;
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
        <div className='gif-container'>
          {this.renderGifs()}
        </div>
      </div>
    );
  }
}

export default Search;
