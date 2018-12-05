import './helpers/db';
import request from 'supertest';
import app from './app';
const { getUsers, usersSeedData } = require('./helpers/testData');

describe('users routes', () => {
  it('creates a new user', () => {
    const createdUsers = getUsers();
    const users = usersSeedData();

    expect(createdUsers[0]).toEqual({
      _id: expect.any(String),
      email: users[0].email,
      passwordHash: expect.any(String)
    });
  });

});