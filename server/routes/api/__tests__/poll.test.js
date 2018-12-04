import { checkStatus } from '../../../utils/helpers';
import { disconnect } from '../../../utils/connect'
import { dropCollection } from '../../../utils/db';
import request from 'supertest';
import app from '../../../app';
const chance = require('chance').Chance();
import { mockPoll, mockPolls, postPoll } from '../../../utils/fixtures/poll';


describe('polls route', () => {

  beforeEach(async () => await dropCollection('polls'));
  afterAll(async () => await disconnect());

  test('post to /api/polls', async () => {

    const poll = mockPoll();

    await request(app)
      .post('/api/polls')
      .send(poll)
      .then(res => {
        checkStatus(200)(res);
        expect(res.body).toEqual({
          ...poll,
          _id: expect.any(String),
          __v: expect.any(Number),
          choices: poll.choices.map(choice => ({ ...choice, _id: expect.any(String) }))
        })
      });
  });

  test('get to /api/polls', async () => {

    const polls = mockPolls(10);
    polls.forEach(poll => postPoll(poll));

    await request(app)
      .get('/api/polls')
      .then(res => {
        checkStatus(200)(res);
        return polls.forEach(poll => {
          return expect(res.body).toContainEqual({
            ...poll,
            _id: expect.any(String),
            __v: expect.any(Number),
            choices: poll.choices.map(choice => {
              return { ...choice, _id: expect.any(String) };
            })
          });
        });
      });
  });

});
