import React, { Component } from 'react';
import { connect } from 'react-redux';

import Gif from './Gif';
import './styles.scss';
import { addGifToCollection } from '../collection/CollectionActions';

export class GifList extends Component {

  constructor(props) {
    super(props);
    this.renderGifs = this.renderGifs.bind(this);
  }

  renderGifs() {
    const { addGifToCollectionDispatcher } = this.props;
    return this.props.gifList.map(gif => {
      return <div className='gif-button' onClick={() => addGifToCollectionDispatcher(gif)}>
        <Gif gif={gif} key={gif.id} />
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
