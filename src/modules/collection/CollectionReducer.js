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
      const { gif } = action.payload;
      const items = [...state.items];
      const existing = items.find(i => i === gif);
      if(!existing)
        items.push(gif);
      return {
        ...state,
        items
      };
    }

    case REMOVE_GIF_FROM_COLLECTION: {
      const items = state.items.filter(i => i.id !== action.payload.id);
      return {
        ...state,
        items
      };
    }

    default:
      return state;

  }
}