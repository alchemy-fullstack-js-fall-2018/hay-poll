import { getResults } from '../services/pollsApi';

export const FETCH_RESULTS = 'FETCH_RESULTS';
export const fetchResults = id => ({
  type: FETCH_RESULTS,
  payload: getResults(id)
});
