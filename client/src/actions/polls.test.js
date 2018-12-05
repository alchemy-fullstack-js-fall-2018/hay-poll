import { fetchPolls, FETCH_POLLS } from './polls';
import { getPolls } from '../services/pollsApi';

jest.mock('../services/pollsApi.js');

describe('polls actions', () => {
  describe('fetchPolls', () => {
    it('creates a FETCH_POLLS action with a promise as its payload', () => {
      expect(fetchPolls()).toEqual({
        type: FETCH_POLLS,
        payload: getPolls()
      });
    });
  });
});
