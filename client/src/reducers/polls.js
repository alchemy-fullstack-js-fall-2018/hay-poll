import {
  FETCH_POLLS, FETCH_POLLS_LOADING, FETCH_POLLS_END,
  CREATE_POLL
} from '../actions/polls';

import mockPolls from '../services/fixtures/polls.json';

const initialState = {
  list: mockPolls,
  loading: false,
  details: null
};

export default function reducer(state = initialState, { type, payload }){
  switch(type) {
    case FETCH_POLLS:
      return { ...state, list: [...payload] };
    case FETCH_POLLS_LOADING:
      return { ...state, loading: true };
    case FETCH_POLLS_END:
      return { ...state, loading: false };
    case CREATE_POLL:
      return { ...state, list: [...state.list, payload] };
    default:
      return state;
  }
}



