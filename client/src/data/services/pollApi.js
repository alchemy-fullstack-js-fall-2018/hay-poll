import { get } from '../lib/request';

const API_URL = '/api/polls';

export const getPolls = () => {
  return get(`${API_URL}/polls`)
    .then(polls => ([...polls]));
};

export const getPoll = () => {

};

export const getResults = () => {

};

export const postPoll = () => {

};

export const postVote = () => {

};
