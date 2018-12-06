import {
  fetchPolls,
  FETCH_POLLS,
  FETCH_POLLS_LOADING,
  FETCH_POLLS_LOADED
} from './polls';

jest.mock('../services/pollsApi.js');

describe('polls actions', () => {
  describe('fetchPolls', () => {
    it('creates a FETCH_POLLS action with a promise as its payload', () => {
      const action = fetchPolls();
      expect(typeof action.payload.then).toEqual('function');
      expect(action.type).toEqual(FETCH_POLLS);
    });

    it('creates FETCH_POLLS_LOADING and FETCH_POLLS_LOADED actions', () => {
      const action = fetchPolls();
      expect(action.loadStart).toEqual(FETCH_POLLS_LOADING);
      expect(action.loadEnd).toEqual(FETCH_POLLS_LOADED);
    });
  });
});
