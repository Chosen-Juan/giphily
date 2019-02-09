import React, { Component } from 'react'

export class Gif extends Component {
  render() {
    const { gif } = this.props;
    return (
      <div className='column is-one-quarter'>
        <iframe src={gif.embed_url} alt={gif.title} />
      </div>
    )
  }
}

export default Gif
