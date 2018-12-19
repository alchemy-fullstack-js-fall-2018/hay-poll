import { combineReducers } from 'redux';
import polls from './polls';
import session from './session';

export default combineReducers({
  polls,
  session
});
