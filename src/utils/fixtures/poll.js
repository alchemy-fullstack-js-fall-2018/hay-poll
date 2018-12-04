import app from '../../routes/app';
import request from 'supertest';
const chance = require('chance').Chance();

chance.mixin({
  poll: () => ({
    title: chance.string({ length: 10 }),
    description: chance.string({ length: 30 }),
    choices: Array.apply(null, { length: 4 })
      .map(() => ({ description: chance.string({ length: 15 }) }))
  }),
});

export const mockPoll = () => chance.poll();

export const mockPolls = length => Array.apply(null, { length })
  .reduce(acc => [...acc, mockPoll()], []);

export const postPoll = poll => {
  return request(app)
    .post('/api/polls')
    .send(poll)
    .then(res => res.body);
};
