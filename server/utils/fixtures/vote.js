import app from '../../app';
import request from 'supertest';
import { Types } from 'mongoose';
const chance = require('chance').Chance();

export const mockVote = () => ({
  poll: Types.ObjectId(),
  selection: Types.ObjectId()
});

// export const mockVote = () => chance.vote();

// export const mockVotes = length => Array.apply(null, { length })
//   .reduce(acc => [...acc, mockVote()], []);

// export const postVote = vote => {
//   return request(app)
//     .post('/api/polls/:id/votes')
//     .send(vote)
//     .then(res => res.body);
// };
