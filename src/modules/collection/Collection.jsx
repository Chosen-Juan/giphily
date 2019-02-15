import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import CollectionDropdown from '../../modules/collectionDropdown/CollectionDropdown';
import Gif from '../gifList/Gif';
import { removeGifFromCollection } from './CollectionActions';
import './styles.scss';

export class Collection extends Component {

  static propTypes = {
    removeGifFromCollectionDispatcher: PropTypes.func.isRequired,
    collection: PropTypes.arrayOf(Gif.WrappedComponent.propTypes.gif)
  };

  static defaultProps = {
    collection: []
  };

  renderGifs(collection) {
    return collection.map(gif => {
      const removeFromCollection = () => {
        this.props.removeGifFromCollectionDispatcher(gif.id);
      };
      return (
        <div key={gif.id} className='gif-wrap'>
          <div className='gif-button' onClick={removeFromCollection}>
            <span>Remove</span>
          </div>
          <Gif gif={gif} />
        </div>
      );
    });
  }

  render() {
    return (
      <section className='collection-container'>
        <CollectionDropdown />
        <div className='collection'>
            {this.renderGifs(this.props.collection)}
        </div>
      </section>
    );
  }
};

const mapStateToProps = ({ collectionReducer: { items } }) => ({
  collection: items
});

const mapDispatchToProps = dispatch => ({
  removeGifFromCollectionDispatcher: index => dispatch(removeGifFromCollection(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
