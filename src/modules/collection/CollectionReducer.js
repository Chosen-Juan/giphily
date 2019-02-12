import {
  ADD_GIF_TO_COLLECTION,
  REMOVE_GIF_FROM_COLLECTION
} from './CollectionActions';

const initialState = {
  name: '',
  items: []
};

export default function collectionReducer(state = initialState, action) {
  switch(action.type) {

    case ADD_GIF_TO_COLLECTION: {
      const items = [...state.items];
      items.push(action.payload.gif);
      return {
        ...state,
        items
      };
    }

    case REMOVE_GIF_FROM_COLLECTION: {
      const items = [...state.items];
      items.splice(action.payload.index, 1);
      return {
        ...state,
        items
      };
    }

    default:
      return state;

  }
}