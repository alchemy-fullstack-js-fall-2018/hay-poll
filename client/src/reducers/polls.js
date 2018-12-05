import { FETCH_POLLS, SUBMIT_VOTE, CREATE_POLL } from '../actions/polls';

export default function reducers(state = [], { type, payload }) {
  switch(type) {
    case FETCH_POLLS:
      return payload;
    case SUBMIT_VOTE:
      return payload;
    case CREATE_POLL:
      return payload;
    default:
      return state;
  }
}
