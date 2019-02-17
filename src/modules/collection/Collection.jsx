import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import CollectionDropdown from '../../modules/collectionDropdown/CollectionDropdown';
import Gif from '../gifList/Gif';
import { removeGifFromCollection, createCollection } from './CollectionActions';
import './styles.scss';

export class Collection extends Component {

  static propTypes = {
    removeGifFromCollectionDispatcher: PropTypes.func.isRequired,
    activeCollectionIndex: PropTypes.number.isRequired,
    createCollectionDispatcher: PropTypes.func.isRequired,
    collections: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(Gif.WrappedComponent.propTypes.gif)
    }).isRequired)
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
    const activeCollection = this.props.collections[this.props.activeCollectionIndex];
    return (
      <section className='collection-container'>
        <div className='collection-header'>
          <span className='subtitle'>Collections</span>
          <button className='button is-primary is-outlined' onClick={() => this.props.createCollectionDispatcher('New Collection')}>Add new</button>
        </div>
        <CollectionDropdown />
        <div className='collection'>
            {this.renderGifs(activeCollection.items)}
        </div>
      </section>
    );
  }
};

const mapStateToProps = ({ collectionReducer: { activeCollectionIndex, collections }}) => ({
  collections, activeCollectionIndex
});

const mapDispatchToProps = dispatch => ({
  createCollectionDispatcher: name => dispatch(createCollection(name)),
  removeGifFromCollectionDispatcher: index => dispatch(removeGifFromCollection(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
