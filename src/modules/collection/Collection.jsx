import React, { Component } from 'react';
import { connect } from 'react-redux';

import CollectionDropdown from '../../modules/collectionDropdown/CollectionDropdown';
import Gif from '../gifList/Gif';
import { removeGifFromCollection } from './CollectionActions';
import './styles.scss';

export class Collection extends Component {



  renderGifs(gifList) {
    return gifList.map((gif, index) => {
      const removeFromCollection = () => {
        this.props.removeGifFromCollectionDispatcher(index);
      };
      return (
        <div key={index}>
          <Gif gif={gif} />
          <button onClick={removeFromCollection}>REMOVE</button>
        </div>
      );
    });
  }

  render() {
    return (
      <section className='collection'>
          <CollectionDropdown />
          {this.renderGifs(this.props.collection)}
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
