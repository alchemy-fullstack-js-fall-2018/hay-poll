import { FETCH_POLLS, SUBMIT_VOTE } from '../actions/polls';

export default function reducers(state = [], { type, payload }) {
  switch(type) {
    case FETCH_POLLS:
      return payload;
    case SUBMIT_VOTE:
      return payload;
    default:
      return state;
  }
}
