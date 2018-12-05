import { FETCH_POLLS } from '../actions/polls';

export default function reducers(state = [], { type, payload }) {
  switch(type) {
    case FETCH_POLLS:
      return payload;
    default:
      return state;
  }
}
