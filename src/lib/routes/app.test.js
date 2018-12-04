import { config } from 'dotenv';
import connect from '../utils/connect';
import mongoose from 'mongoose';
import request from 'supertest';
import app from './app';

config();
connect('mongodb://localhost:27017/poll_test');

const createPoll = poll => {
  return request(app)
    .post('/api/polls')
    .send(poll)
    .then(res => res.body);
}

const poll1 = { title: 'My Poll', options: [{ option: 'Test1' }, { option: 'TestB' }] };
const poll2 = { title: 'My Poll2', options: [{ option: 'TestA' }, { option: 'Test2' }] }

