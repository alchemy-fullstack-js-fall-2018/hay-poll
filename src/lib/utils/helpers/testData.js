const { dropCollection } = require('./db');
const request = require('supertest');
const app = require('../../routes/app');

beforeEach(() => {
  return dropCollection('polls');
});

let createdPolls;

let polls = [
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
