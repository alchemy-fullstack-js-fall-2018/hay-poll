import { SUBMIT_VOTE } from '../actions/polls';
import { FETCH_RESULTS } from '../actions/results';

const initialState = {
  results: {},
  vote: {},
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case SUBMIT_VOTE:
      return { ...state, vote: payload };
    case FETCH_RESULTS:
      return { ...state, results: payload };
    default:
      return state;
  }
}
