import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.scss';

const BACKGROUND_IMAGES = [
  'red.jpg',
  'blue.jpg',
  'yellow.jpg'
];

export class Gif extends Component {
  _isMounted = false;
  state = {
    loading: true,
    src: null
  };

  constructor(props) {
    super(props);
    this.getRandomBackground = this.getRandomBackground.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    const { gif } = this.props;
    const downloadingGif = new Image();
    downloadingGif.src = gif.images.original.url;
    downloadingGif.onload = () => {
      if(this._isMounted) {
        this.setState({
          loading: false,
          src: downloadingGif.src
        });
      }
    };
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getRandomBackground() {
    return BACKGROUND_IMAGES[Math.floor(Math.random() * BACKGROUND_IMAGES.length)];
  }

  render() {
    const { gif } = this.props;
    const { loading, src } = this.state;
    const imageProps = {
      src: this.getRandomBackground(),
      alt: gif.title,
      height: `${gif.images.original.height}`,
      className: 'loading'
    };
    if(!loading) {
      imageProps.className = '';
      imageProps.src = src;
      imageProps.height = 'auto';
    }
    return (
      <div className='gif'>
        <img {...imageProps} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  collection: state.collectionReducer.collection
});

export default connect(mapStateToProps)(Gif);
