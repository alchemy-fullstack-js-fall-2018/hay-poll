import { getPolls, getPoll, postPoll } from '../services/polls';

export const FETCH_POLLS = 'FETCH_POLLS';
export const FETCH_POLLS_LOADING = 'FETCH_POLLS_START';
export const FETCH_POLLS_END = 'FETCH_POLLS_END';
export const fetchPolls = () => ({
  type: FETCH_POLLS,
  start: FETCH_POLLS_LOADING,
  end: FETCH_POLLS_END,
  payload: getPolls()
});

export const FETCH_POLL = 'FETCH_POLL';
export const FETCH_POLL_LOADING = 'FETCH_POLL_START';
export const FETCH_POLL_END = 'FETCH_POLL_END';
export const fetchPoll = () => ({
  type: FETCH_POLL,
  start: FETCH_POLL_LOADING,
  end: FETCH_POLL_END,
  payload: getPoll()
});

export const CREATE_POLL = 'CREATE_POLL';
export const CREATE_POLL_LOADING = 'CREATE_POLL_START';
export const CREATE_POLL_END = 'CREATE_POLL_END';
export const createPoll = () => ({
  type: CREATE_POLL,
  start: CREATE_POLL_LOADING,
  end: CREATE_POLL_END,
  payload: postPoll()
});
