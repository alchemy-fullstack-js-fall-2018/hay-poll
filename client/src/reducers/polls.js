import { FETCH_POLLS, SUBMIT_VOTE, CREATE_POLL } from '../actions/polls';

const initialState = {
  allPolls: {},
  currentPoll: {}
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_POLLS:
      return payload;
    case SUBMIT_VOTE:
      return payload;
    case CREATE_POLL:
      return { ...state, currentPoll: payload };
    default:
      return state;
  }
}
