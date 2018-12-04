import { config } from 'dotenv';
import connect from '../util/connect';
import mongoose from 'mongoose';
import request from 'supertest';
import app from './app';

config();
connect('mongodb://localhost:27017/haypoll');

const createPoll = poll => {
  return request(app)
    .post('/api/polls')
    .send(poll)
    .then(res => res.body);
}

describe('poll routes test', () => {

  beforeEach(() => {
    mongoose.connection.dropCollection('polls');
  });

  it('creates a new poll', () => {
    const poll = { title: 'Whos better?', candidates: [{ name: 'Jackie Chan'}, { name: 'Jet Li' }] };

    return request(app)
      .post('/api/polls')
      .send(poll)
      .then(res => {
        expect(res.body).toEqual({
          ...poll,
          _id: expect.any(String),
          __v: 0,
          candidates: [
            { ...poll.candidates[0], _id: expect.any(String) },
            { ...poll.candidates[1], _id: expect.any(String) }
          ],
        });
      });
  });

  it('fetches a list of all polls', () => {

    const poll1 = { title: 'Whos funnier?', candidates: [{ name: 'Kevin Hart'}, { name: 'Chris Rock' }] };
    const poll2 = { title: 'Next President?', candidates: [{ name: 'Oprah Winfrey'}, { name: 'Ellen Degeneres' }] };
    const poll3 = { title: 'Whos more inspirational?', candidates: [{ name: 'Martha Stewart'}, { name: 'Chris Tucker' }] };

    return Promise.all([createPoll(poll1), createPoll(poll2), createPoll(poll3)])
      .then(([poll1Created, poll2Created, poll3Created]) => {
        return Promise.all([
          Promise.resolve(poll1Created),
          Promise.resolve(poll2Created),
          Promise.resolve(poll3Created),
          request(app).get('/api/polls')
        ]);
      })
      .then(([poll1Created, poll2Created, poll3Created, res ]) => {
        const polls = res.body
        expect(polls).toHaveLength(3);
        expect(polls).toContainEqual(poll1Created);
        expect(polls).toContainEqual(poll2Created);
        expect(polls).toContainEqual(poll3Created);
      });
  });
});
