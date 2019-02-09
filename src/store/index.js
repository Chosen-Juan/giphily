import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import searchReducer from '../modules/search/SearchReducer';

const rootReducer = combineReducers({
  search: searchReducer
});

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);