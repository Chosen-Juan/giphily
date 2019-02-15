import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Gif from './Gif';
import './styles.scss';
import { addGifToCollection } from '../collection/CollectionActions';

export class GifList extends Component {

  static propTypes = {
    gifList: PropTypes.arrayOf(Gif.WrappedComponent.propTypes.gif),
    addGifToCollectionDispatcher: PropTypes.func.isRequired
  };

  static defaultProps = {
    gifList: []
  };

  constructor(props) {
    super(props);
    this.renderGifs = this.renderGifs.bind(this);
  }

  renderGifs() {
    const { addGifToCollectionDispatcher } = this.props;
    return this.props.gifList.map(gif => {
      return <div key={gif.id} className='gif-button' onClick={() => addGifToCollectionDispatcher(gif)}>
        <Gif gif={gif} />
      </div>;
    });
  }

  render() {
    return (
      <div className='gif-container'>
        {this.renderGifs()}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  gifList: state.searchReducer.items
});

const mapDispatchToProps = dispatch => ({
  addGifToCollectionDispatcher: gif => dispatch(addGifToCollection(gif))
});

export default connect(mapStateToProps, mapDispatchToProps)(GifList);
