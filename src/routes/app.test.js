import './helpers/db';
import request from 'supertest';
import app from './app';
const {
  getPolls,
  pollsSeedData,
  getUsers,
  usersSeedData,
  getVotes,
  votesSeedData
} = require('./helpers/testData');

describe('polls routes', () => {
  it('creates a new poll', () => {
    const createdPolls = getPolls();
    const polls = pollsSeedData();

    expect(createdPolls[0]).toEqual({
      ...polls[0],
      _id: expect.any(String),
      __v: 0,
      options: [
        { ...polls[0].options[0], _id: expect.any(String) },
        { ...polls[0].options[1], _id: expect.any(String) }
      ]
    });
  });

  it('gets a list of all polls', () => {
    const createdPolls = getPolls();

    return request(app)
      .get('/api/polls')
      .then(res => {
        expect(res.body.length).toEqual(2);
        expect(res.body).toContainEqual(createdPolls[0]);
        expect(res.body).toContainEqual(createdPolls[1]);
      });
  });

  it('gets a poll by id', () => {
    const createdPolls = getPolls();

    return request(app)
      .get(`/api/polls/${createdPolls[1]._id}`)
      .then(res => {
        expect(res.body).toEqual({ ...createdPolls[1] });
      });
  });
});

describe('users routes', () => {
  it('creates a new user', () => {
    const createdUsers = getUsers();
    const users = usersSeedData();

    expect(createdUsers[0]).toEqual({
      _id: expect.any(String),
      email: users[0].email,
    });
  });
});

describe('votes routes', () => {
  it('creates a new vote', () => {
    const createdVotes = getVotes();
    const votes = votesSeedData();

    expect(createdVotes[0]).toEqual({
      _id: expect.any(String),
      __v: expect.any(Number),
      option: votes[0].option,
      poll: votes[0].poll,
      user: votes[0].user
    });
  });
});
