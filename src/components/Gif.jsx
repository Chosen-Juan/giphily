import React, { Component } from 'react';

export class Gif extends Component {
  render() {
    const { gif } = this.props;
    return (
      <img src={gif.images.original.url} alt={gif.title} />
    );
  }
}

export default Gif;
