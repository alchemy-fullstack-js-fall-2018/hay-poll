import { dropCollection } from './db';
import request from 'supertest';
import app from '../../routes/app';
import { identity } from 'rxjs';

beforeEach(() => {
  return dropCollection('polls');
});

beforeEach(() => {
  return dropCollection('users');
});

beforeEach(() => {
  return dropCollection('votes');
});

let createdPolls;
let createdVotes;
let createdUsers;

const polls = [
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
      }
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
      }
    ]
  }
];

const users = [
  {
    email: 'test@123.com',
    password: '123'
  },
  {
    email: 'test@457.com',
    password: '457'
  }
];

let votes = [];

const createPoll = poll => {
  return request(app)
    .post('/api/polls')
    .send(poll)
    .then(res => res.body);
};

const createVote = vote => {
  const id = vote.poll;
  return request(app)
    .post(`/api/polls/${id}/votes`)
    .send(vote)
    .then(res => res.body);
};

const createUser = user => {
  return request(app)
    .post('/api/users')
    .send(user)
    .then(res => res.body);
};

beforeEach(() => {
  return Promise.all(polls.map(createPoll)).then(pollsRes => {
    createdPolls = pollsRes;
  });
});

beforeEach(() => {
  return Promise.all(users.map(createUser)).then(usersRes => {
    createdUsers = usersRes;
  });
});

beforeEach(() => {
  votes = [];
  votes.push({
    poll: createdPolls[0]._id,
    user: createdUsers[0]._id,
    option: createdPolls[0].options[0]._id
  });

  votes.push({
    poll: createdPolls[1]._id,
    user: createdUsers[1]._id,
    option: createdPolls[1].options[1]._id
  });

  return Promise.all(votes.map(createVote)).then(votesRes => {
    createdVotes = votesRes;
  });
});

const getPolls = () => createdPolls;
const pollsSeedData = () => polls;

const getUsers = () => createdUsers;
const usersSeedData = () => users;

const getVotes = () => createdVotes;
const votesSeedData = () => votes;

module.exports = {
  getPolls,
  getVotes,
  getUsers,
  pollsSeedData,
  votesSeedData,
  usersSeedData
};
