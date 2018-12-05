import { getPolls, postVote } from '../services/pollsApi';

export const FETCH_POLLS = 'FETCH_POLLS';
export const fetchPolls = () => ({
  type: FETCH_POLLS,
  payload: getPolls()
});

export const SUBMIT_VOTE = 'SUBMIT_VOTE';
export const submitVote = vote => ({
  type: SUBMIT_VOTE,
  payload: postVote(vote)
});
