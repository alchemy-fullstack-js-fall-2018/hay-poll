import { config } from 'dotenv';
import connect from '../utils/connect';
import mongoose from 'mongoose';
import request from 'supertest';
import app from './app';

config();
connect('mongodb://localhost:27017/poll');

describe('poll routes', () => {

  const createPoll = poll => {
    return request(app)
      .post('/api/polls')
        .send(poll)
        .then(res => res.body);
  }

  beforeEach(() => {
    mongoose.connection.dropCollection('polls');
  });

  it('creates a new poll', () => {
    const poll = {
      issue: 'Favorite polling site',
      options: [{ choice: 'Survey Monkey'}, { choice: 'Strawpoll' }]
    }
    return request(app)
      .post('/api/polls')
      .send(poll)
      .then(res => {
        expect(res.body).toEqual({
          ...poll,
          _id: expect.any(String),
          __v: 0,
          options: [
            {...poll.options[0], _id: expect.any(String)},
            {...poll.options[1], _id: expect.any(String)}
          ]
        })
      })
  })

  it('gets all polls', () => {
    const poll1 = {
      issue: 'Favorite polling site',
      options: [{ choice: 'Survey Monkey'}, { choice: 'Strawpoll' }]
    }
    const poll2 = {
      issue: 'Best TV Show',
      options: [{ choice: 'Halt and Catch Fire'}, { choice: 'GOT' }]
    }
    return Promise.all([createPoll(poll1), createPoll(poll2)])
      .then(([poll1Created, poll2Created]) => {
        return Promise.all([
          Promise.resolve(poll1Created),
          Promise.resolve(poll1Created),
          request(app).get('/api/polls')
        ])
        .then(([poll1Created, poll2Created, res]) => {
          expect(res.body).toHaveLength(2);
          expect(res.body).toContainEqual(poll1Created);
          expect(res.body).toContainEqual(poll2Created);
        })
      })
  })
})