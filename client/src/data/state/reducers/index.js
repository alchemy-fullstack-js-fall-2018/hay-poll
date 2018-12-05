import { combineReducers } from 'redux';
import pollsReducer from './polls';
import resultsReducer from './results';
import sessionReducer from './session';

export default combineReducers({
  polls: pollsReducer,
  results: resultsReducer,
  session: sessionReducer
});
