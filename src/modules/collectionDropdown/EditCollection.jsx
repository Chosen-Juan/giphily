import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteCollection, renameCollection } from '../collection/CollectionActions';
import Gif from '../gifList/Gif';

export class EditCollection extends Component {
  static propTypes = {
    closeCallback: PropTypes.func.isRequired,
    deleteCollectionDispatcher: PropTypes.func.isRequired,
    renameCollectionDispatcher: PropTypes.func.isRequired,
    activeCollectionIndex: PropTypes.number.isRequired,
    collections: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(Gif.WrappedComponent.propTypes.gif)
    }).isRequired)
  };

  constructor(props) {
    super(props);
    const collection = this.props.collections[this.props.activeCollectionIndex];
    this.state = { collection, collectionName: collection.name };
  };

  onInputChange = event => {
    this.setState({ collectionName: event.target.value });
  };

  save = () => {
    this.props.renameCollectionDispatcher(this.state.collection.id, this.state.collectionName);
    this.props.closeCallback();
  };

  delete = () => {
    this.props.deleteCollectionDispatcher(this.props.activeCollectionIndex);
    this.props.closeCallback();
  }

  render() {
    return (
      <div>
        <input
          className='input'
          type='text'
          value={this.state.collectionName}
          onChange={this.onInputChange}
        />
        <div className='buttons'>
          <button className='button is-primary is-outlined' onClick={this.save}>
            Save
          </button>
          <button className='button is-danger is-outlined' onClick={() => this.props.closeCallback()}>
            Cancel
          </button>
          <button className='button is-danger is-outlined' onClick={this.delete}>
            Delete
          </button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = ({ collectionReducer: { activeCollectionIndex, collections }}) => ({
  activeCollectionIndex, collections
});

const mapDispatchToProps = dispatch => ({
  deleteCollectionDispatcher: index => dispatch(deleteCollection(index)),
  renameCollectionDispatcher: (id, name) => dispatch(renameCollection(id, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCollection);
