import {
  getPolls, getPoll, getResults,
  postPoll, postVote
} from '../pollApi';
import mockGetPolls from '../../../testing/fixtures/getPolls.json';

jest.mock('../../lib/request.js', () => ({
  get: url => {
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
