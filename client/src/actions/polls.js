import { getPolls } from '../services/polls';

export const FETCH_POLLS = 'FETCH_POLLS';
export const fetchPolls = () => ({
  type: FETCH_POLLS,
  payload: getPolls()
});
