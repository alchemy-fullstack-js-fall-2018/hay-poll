import { FETCH_POLLS, FETCH_POLL } from '../actions/polls';

const initialState = {
  polls: [],
  detail: null
};

export default function reducers(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_POLLS:
      return { ...state, polls: payload };
    case FETCH_POLL:
      return { ...state, detail: payload };
    default:
      return state;
  }
}
