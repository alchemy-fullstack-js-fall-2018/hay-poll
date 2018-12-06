/* eslint-disable no-console */
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { middleware } from '../middleware';
import pollsReducer from './polls/reducers';
import resultsReducer from './results/reducers';
import sessionReducer from './session/reducers';

const reducer = combineReducers({
  polls: pollsReducer,
  results: resultsReducer,
  session: sessionReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  ));
