import {
  FETCH_GIF_BEGIN,
  FETCH_GIF_SUCCESS,
  FETCH_GIF_FAILURE
} from './SearchActions';

const initialState = {
  items: [],
  query: '',
  loading: false,
  error: null
};

export default function SearchReducer (state = initialState, action) {
  switch(action.type) {
    case FETCH_GIF_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        query: action.payload.query
      };
    case FETCH_GIF_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.gifList
      };
    case FETCH_GIF_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
};