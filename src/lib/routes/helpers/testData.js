import { dropCollection } from './db';
import request from 'supertest';
import app from '../../routes/app';

beforeEach(() => {
  return dropCollection('polls');
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
    email: 'test@456.com',
    password: '456'
  }
];

let votes = [
  {
    userId: null,
    pollId: null,
    optionId: null
  },
  {
    userId: null,
    pollId: null,
    optionId: null
  }
];

const createPoll = poll => {
  return request(app)
    .post('/api/polls')
    .send(poll)
    .then(res => res.body);
};

const createVote = vote => {
  return request(app)
    .post('/api/votes')
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
  console.log('createdPolls', createdPolls);
  votes[0].pollId = createdPolls[0]._id;
  votes[0].userId = createdUsers[0]._id;
  votes[0].optionId = createdPolls[0].options[0]._id;

  votes[1].pollId = createdPolls[1]._id;
  votes[1].userId = createdUsers[1]._id;
  votes[1].optionId = createdPolls[1].options[1]._id;

  return Promise.all(votes.map(createVote)).then(votesRes => {
    createdVotes = votesRes;
  });
});

const getPolls = () => createdPolls;
const pollsSeedData = () => polls;

module.exports = {
  getPolls,
  pollsSeedData
};
