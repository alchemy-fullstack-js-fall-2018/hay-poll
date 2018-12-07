import { get, post } from './request';


export const getPolls = () => {
  return get('/api/polls');
};
