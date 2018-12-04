import { dropCollection } from './db';
import request from 'supertest';
import app from '../../routes/app';

beforeEach(() => {
  return dropCollection('polls');
});

let createdPolls;

const polls= [
  {
    title: 'Poll1',
    options: [
      {
        option: 'Option1',
        description: 'Description1'
      },
      {
        option: 'Option2',
        description: 'Description2'
      },
    ]
  },
  {
    title: 'Poll2',
    options: [
      {
        option: 'Option3',
        description: 'Description3'
      },
      {
        option: 'Option4',
        description: 'Description4'
      },
    ]
  }
];

const createPoll = poll => {
  return request(app)
    .post('/api/polls')
    .send(poll)
    .then(res => res.body);
};

beforeEach(() => {
  return Promise.all(polls.map(createPoll)).then(pollsRes => {
    createdPolls = pollsRes;
  });
});

const getPolls = () => createdPolls;
const pollsSeedData = () => polls;

module.exports = {
  getPolls,
  pollsSeedData
};
