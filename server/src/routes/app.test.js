import { config } from 'dotenv';
import connect from '../utils/connect';
import mongoose from 'mongoose';
import request from 'supertest';
import app from './app';

config();
connect();

const seedPolls = [
  {
    title: 'poll1',
    candidates: [
      { name: 'Alf' },
      { name: 'Rich' },
      { name: 'Brunhilde' }
    ]
  },
  {
    title: 'poll2',
    candidates: [
      { name: 'Cedric' },
      { name: 'Parvati' },
      { name: 'Remus' }
    ]
  },
  {
    title: 'poll3',
    candidates: [
      { name: 'Cletus' },
      { name: 'Rev. Lovejoy' },
      { name: 'Hans Moleman' }
    ]
  },
];

const createPoll = poll => {
  return request(app)
    .post('/api/polls')
    .send(poll)
    .then(res => res.body);
};

describe('poll routes', () => {
  beforeEach(() => {
    return mongoose.connection.dropCollection('polls')
      .catch(() => {});
  });

  let createdPolls;

  beforeEach(() => {
    return Promise.all(seedPolls.map(createPoll))
      .then(pollRes => createdPolls = pollRes);
  });


  it('gets a list of all the polls', () => {
    return request(app).get('/api/polls')
      .then(retrievedPolls => {
        createdPolls.forEach(createdPoll => {
          expect(retrievedPolls.body).toContainEqual(createdPoll);
        });
      });
  });

  it('gets a poll by its id', () => {
    return request(app).get(`/api/polls/${createdPolls[0]._id}`)
      .then(res => {
        expect(res.body).toEqual({ ...createdPolls[0], __v: expect.any(Number) });
      });
  });

  it('creates a poll', () => {
    return request(app).post('/api/polls')
      .send({
        title: 'Who wants to clean my room?',
        candidates: [{ name: 'kid1' }, { name: 'kid2' }]
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          __v: expect.any(Number),
          title: 'Who wants to clean my room?',
          candidates: [
            {
              _id: expect.any(String),
              name: 'kid1'
            },
            {
              _id: expect.any(String),
              name: 'kid2'
            }
          ]
        });
      });
  });
});
