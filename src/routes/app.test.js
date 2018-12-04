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
});
