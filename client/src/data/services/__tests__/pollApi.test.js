import { getPolls, getPoll } from '../pollApi';
// getResults, postPoll, postVote
import mockGetPolls from '../../../testing/fixtures/getPolls.json';
import mockGetPoll from '../../../testing/fixtures/getPoll.json';

jest.mock('../../lib/request.js', () => ({
  get: url => {
    if(url.startsWith('/api/polls/')) {
      return Promise.resolve(mockGetPoll);
    }
    if(url.startsWith('/api/polls')) {
      return Promise.resolve(mockGetPolls);
    }
    else {
      return Promise.reject({ error: '404' });
    }
  },
  post: (url, body) => {
    // if(url.startsWith('/api/polls')) {
    //   return Promise.resolve(mockGetPolls);
    // }
    // else {
    //   return Promise.reject({ error: '404' });
    // }
  }
}));

describe('pollApi routes', () => {

  describe('get /polls', () => {

    test('returns an array of polls', () => {
      getPolls()
        .then(polls => {
          expect(polls).toHaveLength(1);
          expect(polls).toContainEqual({
            __v: expect.any(Number),
            _id: expect.any(String),
            title: expect.any(String),
            description: expect.any(String),
            choices: [
              { _id: expect.any(String), description: expect.any(String) },
              { _id: expect.any(String), description: expect.any(String) },
              { _id: expect.any(String), description: expect.any(String) },
              { _id: expect.any(String), description: expect.any(String) }
            ]
          });
        });
    });

  });

  describe('get /polls/:id', () => {

    test('returns a single poll object', () => {

      const id = '5c061a9411547d6e55aa426b';

      getPoll(id)
        .then(poll => {
          expect(poll).toEqual({
            __v: expect.any(Number),
            _id: expect.any(String),
            title: expect.any(String),
            description: expect.any(String),
            choices: [
              { _id: expect.any(String), description: expect.any(String) },
              { _id: expect.any(String), description: expect.any(String) },
              { _id: expect.any(String), description: expect.any(String) },
              { _id: expect.any(String), description: expect.any(String) }
            ]
          });
        });
    });

  });

});
