import { getPolls, getPoll, postVote, postPoll } from '../services/pollsApi';

export const FETCH_POLLS = 'FETCH_POLLS';
export const fetchPolls = () => ({
  type: FETCH_POLLS,
  payload: getPolls()
});

export const FETCH_POLL = 'FETCH_POLL';
export const fetchPoll = id => ({
  type: FETCH_POLL,
  payload: getPoll(id)
});

export const SUBMIT_VOTE = 'SUBMIT_VOTE';
export const submitVote = (id, vote) => ({
  type: SUBMIT_VOTE,
  payload: postVote(id, vote)
});

export const LOAD_POLL_START = 'LOAD_POLL_START';
export const LOAD_POLL_END = 'LOAD_POLL_END';
export const CREATE_POLL = 'CREATE_POLL';
export const createPoll = poll => ({
  type: CREATE_POLL,
  loadStart: LOAD_POLL_START,
  loadEnd: LOAD_POLL_END,
  payload: postPoll(poll)
});
