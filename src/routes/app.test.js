import { config } from 'dotenv';
import connect from '../utils/connect';
import mongoose from 'mongoose';
import request from 'supertest';
import app from './app';
import Chance from 'chance';
const chance = new Chance();

config();
connect('mongodb://localhost:27017/poll');

describe('poll routes', () => {

  const createPoll = poll => {
    return request(app)
      .post('/api/polls')
        .send(poll)
        .then(res => res.body);
  }

  let polls = Array.apply(null, { length: 10 }).map(() => {
    return {
      issue: chance.word(),
      options: [{ choice: chance.word() }, { choice: chance.word() }, { choice: chance.word() }]
    }
  })

  beforeEach(() => {
    return mongoose.connection.dropCollection('polls').catch(() => {});
  });

  beforeEach(() => {
    return mongoose.connection.dropCollection('votes').catch(() => {});
  });

  let createdPolls;
  beforeEach(() => {
    return Promise.all(polls.map(createPoll))
      .then(newPolls => {
        createdPolls = newPolls;
      });
  })

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
          Promise.resolve(poll2Created),
          request(app).get('/api/polls')
        ])
        .then(([poll1Created, poll2Created, res]) => {
          expect(res.body).toHaveLength(12);
          expect(res.body).toContainEqual(poll1Created);
          expect(res.body).toContainEqual(poll2Created);
        })
      })
  })

  it('can get a specific poll by id', () => {
    return request(app)
      .get(`/api/polls/${createdPolls[0]._id}`)
      .then(res => {
        expect(res.body).toEqual({ ...createdPolls[0], __v: 0 })
      })
  });

  it('allows users can vote for a an option', () => {
    const vote = {
      pollId: createdPolls[0]._id,
      votes: [createdPolls[0].options[0].choice]
    }

    return request(app)
      .post(`/api/polls/${createdPolls[0]._id}/votes`)
      .send(vote)
      .then(res => {
        expect(res.body).toEqual({
          __v: 0,
          _id: expect.any(String),
          pollId: createdPolls[0]._id,
          votes: [{
            _id: expect.any(String),
            choiceId: expect.any(String),
            choiceName: vote.votes[0]
          }]
        })
      })
  })

  it('allows users to vote for multiple options', () => {
    const vote = {
      pollId: createdPolls[1]._id,
      votes: [createdPolls[1].options[0].choice, createdPolls[1].options[1].choice]
    }

    return request(app)
      .post(`/api/polls/${createdPolls[1]._id}/votes`)
      .send(vote)
      .then(res => {
        expect(res.body).toEqual({
          __v: 0,
          _id: expect.any(String),
          pollId: createdPolls[1]._id,
          votes: [{
            _id: expect.any(String),
            choiceId: expect.any(String),
            choiceName: vote.votes[0]
          },
          {
            _id: expect.any(String),
            choiceId: expect.any(String),
            choiceName: vote.votes[1]
          }]
        })
      })
  })

  describe('results', () => {

    let createdVotes;
    beforeEach(() => {

      const createVote = (pollId, vote) => {
        return request(app)
        .post(`/api/polls/${pollId}/votes`)
        .send(vote)
        .then(res => res.body)
      }

      let votes = Array.apply(null, { length: 25 }).map(() => {
        return {
          pollId: createdPolls[0]._id,
          votes: [createdPolls[0].options[chance.integer({ min: 0, max: 2 })].choice, createdPolls[0].options[chance.integer({ min: 0, max: 2 })].choice]
        }
      });

      let pollId = createdPolls[0]._id;
      return Promise.all(votes.map(createVote.bind(null, pollId)))
      .then(newVotes => {
        createdVotes = newVotes;
      })

    })

    it('allows users to get results of the poll', () => {
      return request(app)
        .get(`/api/polls/${createdPolls[0]._id}/results`)
        .then(result => {
          expect(result.body).toEqual('sldfjk')
        })
    })
   })
})
