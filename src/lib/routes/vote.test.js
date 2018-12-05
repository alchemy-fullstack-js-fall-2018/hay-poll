import './helpers/db';
import request from 'supertest';
import app from './app';
const { getVotes, votesSeedData } = require('./helpers/testData');

describe('votes routes', () => {
  it('creates a new vote', () => {
    const createdVotes = getVotes();
    const votes = votesSeedData();

    expect(createdVotes[0]).toEqual({
      ...votes[0],
      _id: expect.any(String),
      __v: 0
    });
  });

});