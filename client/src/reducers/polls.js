import {  FETCH_POLLS, FETCH_POLLS_LOADING, FETCH_POLLS_LOADED } from '../actions/polls';

const initialState = {
  loading: false,
  list: [],
  details: null
};
export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_POLLS:
      return { ...state, list: payload };
    case FETCH_POLLS_LOADING:
      return { ...state, loading: true };
    case FETCH_POLLS_LOADED:
      return { ...state, loading: false };
    default:
      return state;
  }
}
