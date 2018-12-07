import mongoose from 'mongoose';
import connect from '../../utils/connect';
import request from 'supertest';
import app from '../app';

connect('mongodb://localhost:27017/hay_poll_test');

const createPoll = poll => {
  return request(app)
    .post('/api/polls')
    .send(poll)
    .then(res => res.body);
};

let createdPoll1 = null;

const poll1 = {
  title: 'Best Doughnut in Portland',
  candidates: [{ name: 'Nola' }, { name: 'Blue Star' }, { name: 'Coco' }]
};
const poll2 = {
  title: 'Most Difficult Second Language to Learn',
  candidates: [{ name: 'Latin' }, { name: 'Mandarin' }, { name: 'Arabic' }]
};

describe('poll routes', () => {
  beforeAll(() => {
    return mongoose.connection.dropCollection('polls').catch(() => {});
  });

  afterAll(() => {
    return mongoose.disconnect();
  });

  it('creates a poll', () => {
    return request(app)
      .post('/api/polls')
      .send(poll1)
      .then(res => {
        createdPoll1 = res.body;
        expect(res.body).toEqual({
          ...poll1,
          _id: expect.any(String),
          candidates: [
            { ...poll1.candidates[0], _id: expect.any(String) },
            { ...poll1.candidates[1], _id: expect.any(String) },
            { ...poll1.candidates[2], _id: expect.any(String) }
          ]
        });
      });
  });

  it('gets a poll by id', () => {
    return request(app)
      .get(`/api/polls/${createdPoll1._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...createdPoll1,
          __v: 0
        });
      });
  });

  it('deletes a poll', () => {
    return request(app)
      .delete(`/api/polls/${createdPoll1._id}`)
      .then(res => {
        expect(res.body).toEqual({ removed: true });
      });
  });

  it('can get a list of all polls', () => {
    return Promise.all([createPoll(poll1), createPoll(poll2)])
      .then(([createdPoll1, createdPoll2]) => {
        return Promise.all([
          Promise.resolve(createdPoll1),
          Promise.resolve(createdPoll2),
          request(app).get('/api/polls')
        ]);
      })
      .then(([createdPoll1, createdPoll2, res]) => {
        const polls = res.body;
        expect(polls).toHaveLength(2);
        expect(polls).toContainEqual(createdPoll1);
        expect(polls).toContainEqual(createdPoll2);
      });
  });

});
