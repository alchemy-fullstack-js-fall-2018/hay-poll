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
        polls.forEach(poll => {
          expect(res.body).toContainEqual({
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

  test('get to /api/polls/:id', async () => {

    const poll = mockPoll();
    let createdPoll;

    await request(app)
      .post('/api/polls')
      .send(poll)
      .then(({ body }) => createdPoll = body);

    await request(app)
      .get(`/api/polls/${createdPoll._id}`)
      .then(res => {
        checkStatus(200)(res);
        expect(res.body).toEqual(createdPoll)
    });
  });

  test('post to /api/polls/:id/votes', async () => {

    const poll = mockPoll();
    let createdPoll;

    await request(app)
      .post('/api/polls')
      .send(poll)
      .then(({ body }) => createdPoll = body);

    const vote = {
      poll: createdPoll._id,
      selection: createdPoll.choices[chance.natural({ min: 0, max: 3})]._id
    }

    await request(app)
      .post(`/api/polls/${createdPoll._id}/votes`)
      .send(vote)
      .then(res => {
        checkStatus(200)(res);
        expect(res.body).toEqual({
          ...vote,
          _id: expect.any(String),
          __v: expect.any(Number)
        })
    });
  });

  test.skip('get to /api/polls/:id/results', async () => {

    const poll = mockPoll();
    let createdPoll;
    let id;

    await request(app)
      .post('/api/polls')
      .send(poll)
      .then(({ body }) => createdPoll = body);

    id = createdPoll._id;
    const vote = {
      poll: createdPoll._id,
      selection: createdPoll.choices[chance.natural({ min: 0, max: 3 })]._id
    }

    const sendVote = (id, amount) => {
      request(app)
        .post(`/api/polls/${id}/votes`)
        .send(vote);
    };

    await sendVote(id);
    await request(app)
      .get(`/api/polls/${id}/results`)
      .then(({ body }) => expect(body).toEqual({ count: 1 }))



  });

});
