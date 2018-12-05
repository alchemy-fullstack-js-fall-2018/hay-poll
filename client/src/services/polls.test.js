import { getPolls, getPoll, getResults, postPoll, postVote } from './polls';
import mockPollsJson from './fixtures/polls.json';
import mockPollJson from './fixtures/poll.json';
import mockResultsJson from './fixtures/results.json';
import mockPostPollJson from './fixtures/postPoll.json';
import mockPostVoteJson from './fixtures/postVote.json';

jest.mock('./request.js', () => ({
  get: url => {
    if(url.startsWith('api/polls')) {
      return Promise.resolve(mockPollsJson);
    } else if(url.startsWith('api/polls/')) {
      return Promise.resolve(mockPollJson);
    } else if(url.startsWith('api/polls/') && url.endsWith('results')) {
      return Promise.resolve(mockResultsJson);
    } else {
      return Promise.reject({ error: '404' });
    }
  },
  post: url => {
    if(url.startsWith('api/polls')) {
      return Promise.resolve(mockPostPollJson);
    } else if(url.startsWith('api/polls/')) {
      return Promise.resolve(mockPostVoteJson);
    } else {
      return Promise.reject({ error: '404' });
    }
  }
}));

describe('polls api', () => {
  it('gets a list of poll', () => {
    getPolls()
      .then(polls => {
        expect(polls).toHaveLength(2);
      });
  });

  it('gets a single poll', () => {
    getPoll()
      .then(poll => {
        expect(poll).toHaveLength(1);
      });
  });
});

