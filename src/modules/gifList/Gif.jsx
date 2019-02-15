import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import './styles.scss';

const BACKGROUND_IMAGES = [
  'red.jpg',
  'blue.jpg',
  'yellow.jpg'
];
const imageProp = PropTypes.shape({
  url: PropTypes.string
});
export class Gif extends Component {
  _isMounted = false;
  state = {
    loading: true,
    src: null
  };
  static propTypes = {
    gif: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      images: PropTypes.shape({
        original: imageProp.isRequired,
        original_still: imageProp.isRequired
      }).isRequired
    }).isRequired
  };

  componentDidMount() {
    this._isMounted = true;
    const { gif: { images: { original, original_still } } } = this.props;
    const downloadingStill = new Image();
    downloadingStill.src = original_still.url;
    downloadingStill.onload = () => {
      if(this._isMounted) {
        this.setState({
          loading: false,
          src: this.state.src === null ? downloadingStill.src : this.state.src
        });
      }
    };

    const downloadingGif = new Image();
    downloadingGif.src = original.url;
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

  getRandomBackground = () => {
    return BACKGROUND_IMAGES[Math.floor(Math.random() * BACKGROUND_IMAGES.length)];
  }

  render() {
    const { gif } = this.props;
    const { loading, src } = this.state;
    const imageProps = {
      src: this.getRandomBackground(),
      alt: gif.title,
      className: 'loading'
    };
    if(!loading) {
      imageProps.className = '';
      imageProps.src = src;
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
