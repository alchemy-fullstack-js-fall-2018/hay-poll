import { get, post } from './request';

export const getPolls = () => {
  return get('/api/polls');
};

export const getPoll = id => {
  return get(`/api/polls/${id}`);
};

export const postPoll = poll => {
  return post('/api/polls', poll);
};

export const getResults = id => {
  return get(`/api/polls/${id}/results`);
};

export const postVote = (id, vote) => {
  return post(`/api/polls/${id}/votes`, vote);
};

