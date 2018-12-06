import { combineReducers } from 'redux';
import pollsReducer from './polls';
import resultsReducer from './results';

export default combineReducers({
  results: resultsReducer,
  polls: pollsReducer
});
