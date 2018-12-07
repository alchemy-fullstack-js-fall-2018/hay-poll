import { polls } from '../services/__mocks__/pollsApi';
import  { getPolls } from './polls';

describe('polls selector', () => {
  const state = {
    polls: {
      loading: false,
      list: polls,
      details: null
    }
  };

  it('gets the polls from state', () => {
    const allPolls = getPolls(state);

    polls.forEach(poll => {
      expect(allPolls).toContainEqual(poll);
    });
  });
});
