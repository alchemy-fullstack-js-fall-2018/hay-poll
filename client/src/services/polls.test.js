import { getPolls, getPoll, getResults, postPoll, postVote } from './polls';
import mockPollsJson from './fixtures/polls.json';
import mockPollJson from './fixtures/poll.json';
import mockResultsJson from './fixtures/results.json';
import mockPostPollJson from './fixtures/postPoll.json';
import mockPostVoteJson from './fixtures/postVote.json';

jest.mock('./request.js', () => ({
  get: url => {
    if(url.startsWith('/api/polls/') && url.endsWith('results')) {
      return Promise.resolve(mockResultsJson);
    } else if(url.startsWith('/api/polls/')) {
      return Promise.resolve(mockPollJson);
    } else if(url.startsWith('/api/polls')) {
      return Promise.resolve(mockPollsJson);
    } else {
      return Promise.reject({ error: '404' });
    }
  },
  post: url => {
    if(url.startsWith('/api/polls/')) {
      return Promise.resolve(mockPostVoteJson);
    } else if(url.startsWith('/api/polls')) {
      return Promise.resolve(mockPostPollJson);
    } else {
      return Promise.reject({ error: '404' });
    }
  }
}));

describe('polls api', () => {
  it('gets a list of poll from database', () => {
    return getPolls()
      .then(polls => {
        expect(polls).toHaveLength(2);
      });
  });

  it('gets a single poll from database', () => {
    const id = '5c0729019ce98c6d4af5c534';

    return getPoll(id)
      .then(poll => {
        expect(poll).toHaveLength(1);
      });
  });

  it('gets results for a choice that shows the number of times it was voted for from database', () => {
    const id = '5c0729019ce98c6d4af5c535';

    return getResults(id)
      .then(results => {
        expect(results).toContainEqual({ _id: expect.any(String), count: expect.any(Number) });
      });
  });

  it('posts a poll to database', () => {
    const poll = {
      title: 'What pet is the cutest',
      options: [{ choice: 'a badger' }, { choice: 'a rat' }, { choice: 'a snake' }]
    };
    return postPoll(poll)
      .then(poll => expect(poll).toEqual({
        ...poll,
        __v: expect.any(Number),
        _id: expect.any(String)
      }));
  });
});

