import { combineReducers } from 'redux';
import userReducer from './users';
import postReducer from './posts';
import commentReducer from './comments';

export default combineReducers({
  users: userReducer,
  posts: postReducer,
  comments: commentReducer
});
