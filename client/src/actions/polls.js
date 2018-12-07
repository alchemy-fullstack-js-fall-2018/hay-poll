import { getPolls } from '../services/pollsApi';

export const FETCH_POLLS = 'FETCH_POLLS';
export const FETCH_POLLS_LOADING = 'FETCH_POLLS_LOADING';
export const FETCH_POLLS_LOADED = 'FETCH_POLLS_LOADED';
export const fetchPolls = () => ({
  type: FETCH_POLLS,
  loadStart: FETCH_POLLS_LOADING,
  loadEnd: FETCH_POLLS_LOADED,
  payload: getPolls()
});
