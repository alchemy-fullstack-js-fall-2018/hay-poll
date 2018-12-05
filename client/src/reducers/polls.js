import { fetchPolls, FETCH_POLLS } from '../actions/polls';

const initialState = {
  loading: false,
  list: [],
  details: null
};
export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_POLLS:
      return { ...state, list: payload };
    default:
      return state;
  }
}