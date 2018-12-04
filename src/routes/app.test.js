import { config } from 'dotenv';
import connect from '../utils/connect';
import mongoose from 'mongoose';
import request from 'supertest';
import app from './app';
import Chance from 'chance';
const chance = new Chance();
config();
connect('mongodb://localhost:27017/poll_test');

const createPoll = poll => {
  return request(app)
    .post('/api/polls')
    .send(poll)
    .then(res => res.body);
};

let polls = Array.apply(null, { length: 10 }).map(() => {
  return {
    title: chance.word(),
    options: [{ choice: chance.word() }, { choice: chance.word() }, { choice: chance.word () }]
  };
});

beforeEach(() => {
  return mongoose.connection.dropCollection('polls').catch(() => {});
});

let createdPolls;
beforeEach(() => {
  return Promise.all(polls.map(createPoll))
    .then(pollRes => createdPolls = pollRes);
});

describe('polls', () => {
  it('creates a poll on post', () => {
    const poll = { title: 'What do you want for dessert', options: [{ choice: 'icecream' }, { choice: 'pie' }, { choice: 'cake' }] };
    return request(app)
      .post('/api/polls')
      .send(poll)
      .then(res => {
        expect(res.body).toEqual({
          ...poll,
          _id: expect.any(String),
          options: [
            { ...poll.options[0], _id: expect.any(String) },
            { ...poll.options[1], _id: expect.any(String) },
            { ...poll.options[2], _id: expect.any(String) }
          ],
          __v: 0
        });
      });
  });


  it('can get a list of all polls', () => {
    const poll1 = { title: 'A Poll', options: [{ choice: 'a choice' }, { choice: 'a choice' }] };
    const poll2 = { title: 'Another Poll', options: [{ name: 'a choice' }, { name: 'a choice' }] };
    return Promise.all([createPoll(poll1), createPoll(poll2)])
      .then(([poll1Created, poll2Created]) => {
        return Promise.all([
          Promise.resolve(poll1Created),
          Promise.resolve(poll2Created),
          request(app).get('/api/polls')
        ]);
      })
      .then(([poll1Created, poll2Created, res]) => {
        const polls = res.body;
        expect(polls).toHaveLength(12);
        expect(polls).toContainEqual(poll1Created);
        expect(polls).toContainEqual(poll2Created);
      });
  });

  it('gets a poll by id', () => {
    return request(app)
      .get(`/api/polls/${createdPolls[0]._id}`)
      .then(res => {
        expect(res.body).toEqual({ ...createdPolls[0], __v: expect.any(Number) });
      });
  });

  it('posts the votes for a poll', () => {
    const vote = {
      pollId: createdPolls[0]._id,
      votes: createdPolls[0].options[chance.natural({ min: 0, max: 2 })]._id
    };

    return request(app)
      .post(`/api/polls/${createdPolls[0]._id}/votes`)
      .send(vote)
      .then(res => {
        console.log('did you make it to the test', res.body);
        expect(res.body).toEqual({
          ...vote,
          _id: expect.any(String),
          __v: expect.any(Number)
        });
      });
  });
});
