import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import searchReducer from '../modules/search/SearchReducer';
import collectionReducer from '../modules/collection/CollectionReducer';

const rootReducer = combineReducers({
  searchReducer,
  collectionReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);