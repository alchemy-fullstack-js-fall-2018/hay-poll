import {
  FETCH_POLLS,
  SUBMIT_VOTE,
  CREATE_POLL,
  LOAD_POLL_START,
  LOAD_POLL_END,
  FETCH_POLL
} from '../actions/polls';

const initialState = {
  allPolls: [],
  currentPoll: {},
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case CREATE_POLL:
      return { ...state, currentPoll: payload };
    case LOAD_POLL_START:
      return { ...state, loading: true };
    case LOAD_POLL_END:
      return { ...state, loading: false };
    case FETCH_POLLS:
      return { ...state, allPolls: payload };
    case FETCH_POLL:
      return { ...state, currentPoll: payload };
    case SUBMIT_VOTE:
      return payload;
    default:
      return state;
  }
}
