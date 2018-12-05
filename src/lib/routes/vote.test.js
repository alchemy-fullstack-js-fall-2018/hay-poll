import './helpers/db';
import request from 'supertest';
import app from './app';
const { getVotes } = require('./helpers/testData');

describe('votes routes', () => {
  it('creates a new vote', () => {
    const createdVotes = getVotes();

    expect(createdVotes[0]).toEqual({ 
      _id: expect.any(String),
      __v: expect.any(Number),
      option: expect.any(String),
      poll: expect.any(String),
      user: expect.any(String),
    });
  });

});