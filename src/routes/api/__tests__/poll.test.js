import { checkStatus } from '../../../utils/helpers';
import { disconnect } from '../../../utils/connect'
import { dropCollection } from '../../../utils/db';
import request from 'supertest';
import app from '../../app';
const chance = require('chance').Chance();



describe('polls route', () => {

  beforeEach(async () => await dropCollection('polls'));
  afterAll(async () => await disconnect());

  test('post to /api/polls', async () => {

    const data = {
      title: chance.string({ length: 10 }),
      description: chance.string({ length: 30 }),
      choices: Array.apply(null, { length: 4 })
        .map(() => ({ description: chance.string({ length: 15 }) }))
    };

    await request(app)
      .post('/api/polls')
      .send(data)
      .then(res => {
        checkStatus(200)(res);
        expect(res.body).toEqual({
          ...data,
          _id: expect.any(String),
          __v: expect.any(Number),
          choices: data.choices.map(choice => ({ ...choice, _id: expect.any(String) }))        })
      });
  });

});
