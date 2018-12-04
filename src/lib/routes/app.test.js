import { config } from 'dotenv';
import connect from '../utils/connect';
import mongoose from 'mongoose';
import request from 'supertest';
import app from './app';

config();
connect('mongodb://localhost:27017/poll_test');

const createPoll = poll => {
  return request(app)
    .post('/api/polls')
    .send(poll)
    .then(res => res.body);
}

const poll1 = { title: 'My Poll', options: [{ option: 'Test1' }, { option: 'Test2' }] };
const poll2 = { title: 'My Poll2', options: [{ option: 'TestA' }, { option: 'TestB' }] }

describe('polls routes', () => {
  beforeEach(() => {
    mongoose.connection.dropCollection('polls');
  });

  it('can create a new poll', () => {
    return createPoll(poll1)
      .then(poll => {
        expect(poll).toEqual({
          ...poll,
          _id: expect.any(String),
          __v: 0,
          options: [
          { ...poll1.options[0], _id: expect.any(String) },
          { ...poll1.options[1], _id: expect.any(String) }
          ]
        });
      })
  });

  it('can get a list of all polls', () => {
    return Promise.all([createPoll(poll1), createPoll(poll2)])
      .then(([poll1Created, poll2Created]) => {
        return Promise.all([
          Promise.resolve(poll1Created),
          Promise.resolve(poll2Created),
          request(app).get('/api/polls')
        ]);
      })
      .then(([poll1Created, poll2Created, res]) => {
        const polls = res.body
        expect(polls).toHaveLength(2);
        expect(polls).toContainEqual(poll1Created);
        expect(polls).toContainEqual(poll2Created);
      });
  });

  it('can get polls by id', () => {
    return Promise.all([createPoll(poll1), createPoll(poll2)])
      .then(([poll1Created, poll2Created]) => {
        return Promise.all([
          Promise.resolve(poll1Created),
          Promise.resolve(poll2Created),
          request(app).get('/api/polls')
        ]);
      })
      .then(([poll1Created, poll2Created, res]) => {
        const polls = res.body
        expect(polls).toHaveLength(2);
        expect(polls).toContainEqual(poll1Created);
        expect(polls).toContainEqual(poll2Created);
      });
  });

});
