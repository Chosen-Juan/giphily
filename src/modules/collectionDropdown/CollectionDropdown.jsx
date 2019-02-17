import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown';

import Gif from '../gifList/Gif';
import EditCollection from './EditCollection';
import { switchCollection } from '../collection/CollectionActions';
import './styles.scss';

export class CollectionDropdown extends Component {
  static propTypes = {
    activeCollectionIndex: PropTypes.number.isRequired,
    switchCollectionDispatcher: PropTypes.func.isRequired,
    collections: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(Gif.WrappedComponent.propTypes.gif)
    }).isRequired)
  };

  state = {
    editing: false
  };

  onSelect = collection => {
    this.props.switchCollectionDispatcher(collection.value);
  }

  toggleEditing = () => {
    this.setState({ editing: !this.state.editing });
  }

  renderDropdown = (collections, activeCollection, editing) => {
    const dropdownOptions = collections.map(c => ({ value: c.id, label: c.name }));
    const defaultValue = dropdownOptions.find(i => i.value === activeCollection.id);
    if(editing)
      return <EditCollection closeCallback={this.toggleEditing} />;
    return <div className='dropdown-container'>
      <Dropdown
        className='collection-dropdown'
        options={dropdownOptions}
        onChange={this.onSelect}
        value={defaultValue}
        placeholder='Select a collection'
      />
      <button class='button is-primary is-outlined edit-button' onClick={this.toggleEditing}>
        Edit
      </button>
    </div>;
  }

  render() {
    const { collections, activeCollectionIndex } = this.props;
    const activeCollection = collections[activeCollectionIndex];
    const { editing } = this.state;
    return (
      <div>
        {this.renderDropdown(collections, activeCollection, editing)}
      </div>
    );
  }
};

const mapStateToProps = ({ collectionReducer: { activeCollectionIndex, collections }}) => ({
  activeCollectionIndex, collections
});

const mapDispatchToProps = dispatch => ({
  switchCollectionDispatcher: id => dispatch(switchCollection(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionDropdown);
