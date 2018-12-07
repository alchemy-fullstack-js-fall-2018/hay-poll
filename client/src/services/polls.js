import { get, post } from './request';

export const getPolls = () => {
  return get('/api/polls');
};

export const getPoll = id => {
  return get(`/api/polls/${id}`);
};

export const getResults = id => {
  return get(`/api/polls/${id}/results`);
};

export const postPoll = poll => {
  return post('/api/polls', poll);
};

export const postVotes = (id, votes) => {
  const votesByCandidate = votes.reduce((acc, { id, vote }) => {
    acc[id] = vote;
    return acc;
  }, {});

  return post(`/api/polls/${id}/votes`, votesByCandidate);
};
