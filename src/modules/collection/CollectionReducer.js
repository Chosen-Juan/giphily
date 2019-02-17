import uuid from 'uuid/v1';
import update, { extend } from 'immutability-helper';

import {
  ADD_GIF_TO_COLLECTION,
  REMOVE_GIF_FROM_COLLECTION,
  SWITCH_COLLECTION,
  DELETE_COLLECTION,
  CREATE_COLLECTION,
  RENAME_COLLECTION
} from './CollectionActions';

const defaultCollectionId = uuid();
const initialState = {
  activeCollectionIndex: 0,
  collections: [{
    name: 'Default Collection',
    id: defaultCollectionId,
    items: []
  }, {
    name: 'Extra Collection',
    id: uuid(),
    items: []
  }]
};

extend('$auto', function(value, object) {
  return object ?
    update(object, value):
    update({}, value);
});
extend('$autoArray', function(value, object) {
  return object ?
    update(object, value):
    update([], value);
});

export default function collectionReducer(state = initialState, action) {
  switch(action.type) {

    case ADD_GIF_TO_COLLECTION: {
      const { gif } = action.payload;
      const { activeCollectionIndex } = state;
      const exists = state.collections[activeCollectionIndex].items.find(i => i.id === gif.id);
      if(exists) {
        return state;
      }
      const updatedState = update(state, {
        collections: {$autoArray: {
          [activeCollectionIndex]: {$auto: {
            items: {$autoArray: { $push: [gif] }}
          }}
        }}
      });
      return updatedState;
    }

    case REMOVE_GIF_FROM_COLLECTION: {
      const { activeCollectionIndex } = state;
      const updatedState = update(state, {
        collections: { $autoArray: {
          [activeCollectionIndex]: {$auto: {
            items: { $autoArray: {$apply: array => array.filter(i => i.id !== action.payload.id) }}
          }}
        }}
      });
      return updatedState;
    }

    case SWITCH_COLLECTION: {
      const collection = state.collections.find(c => c.id === action.payload.id);
      const index = state.collections.indexOf(collection);
      const activeCollectionIndex = update(state.activeCollectionIndex, { $set: index });
      return {
        ...state,
        activeCollectionIndex
      };
    }

    case RENAME_COLLECTION: {
      const collection = state.collections.find(c => c.id === action.payload.id);
      const index = state.collections.indexOf(collection);
      const { collections } = state;
      const newCollections = update(collections, {[index]: { name: { $set: action.payload.name }}});
      return {
        ...state,
        collections: newCollections
      };
    }

    case CREATE_COLLECTION: {
      const newCollection = {
        id: uuid(),
        name: action.payload.name,
        items: []
      };
      const { collections } = state;
      collections.push(newCollection);
      const activeCollectionIndex = collections.indexOf(newCollection);
      return {
        ...state,
        activeCollectionIndex,
        collections
      };
    }

    case DELETE_COLLECTION: {
      const updatedState = update(state, {
        collections: {$splice: [[action.payload.index, 1]]},
        activeCollectionIndex: {$set: 0}
      });
      return updatedState;
    }

    default:
      return state;

  }
}