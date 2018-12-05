import { get } from '../lib/request';

const API_URL = '/api/polls';

export const getPolls = () => {
  return get(`${API_URL}`)
    .then(polls => ([...polls]));
};

export const getPoll = id => {
  return get(`${API_URL}/${id}`)
    .then(poll => poll);
};

export const getResults = () => {

};

export const postPoll = () => {

};

export const postVote = () => {

};
