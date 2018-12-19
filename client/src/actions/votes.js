import { sendVote } from '../services/pollsApi';

export const POST_VOTE = 'POST_VOTE';
export const POST_VOTE_LOADING = 'POST_VOTE_START';
export const POST_VOTE_DONE = 'POST_VOTE_DONE';
export const postVote = (pollId, vote) => ({
  type: POST_VOTE,
  loadStart: POST_VOTE_LOADING,
  loadEnd: POST_VOTE_DONE,
  payload: sendVote(pollId, vote)
});
