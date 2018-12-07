import { config } from 'dotenv';
import connect from '../../utils/connect';
import mongoose from 'mongoose';
import request from 'supertest';
import app from '../app';

config();
connect('mongodb://localhost:27017/poll');

describe('auth routes', () => {

  it('auth routes', () => {

    // const user = {
    //   email: 'test@test.com',
    //   password: 'password'
    // }
    // return request(app)
    //   .post('/api/auth/signup')
    //   .send(user)
    //     .then(result => {
    //       expect(result.body).toEqual('sldkfj')
    //     })
  })
})