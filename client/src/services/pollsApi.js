import { get, post } from './request';

export const getPolls = () => {
  return get('/api/polls');
};

export const getPoll = id => {
  return get(`/api/polls/${id}`);
};

export const sendVote = (pollId, vote) => {
  return post(`/api/polls/${pollId}/votes`, vote);
};
