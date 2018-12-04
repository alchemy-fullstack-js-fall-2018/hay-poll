import Poll from '../Poll';
import { getErrors } from '../../utils/helpers';
import { Types } from 'mongoose';
const chance = require('chance').Chance();


describe('poll model', () => {
  test('validates a good model', () => {
    const data = {
      title: chance.string({ length: 10 }),
      description: chance.string({ length: 30 }),
      choices: Array.apply(null, { length: 4 })
        .map(() => ({ description: chance.string({ length: 15 }) }))
    };
    const poll = new Poll(data);
    const jsonPoll = poll.toJSON();
    expect(jsonPoll).toEqual({
      _id: expect.any(Object),
      title: data.title,
      description: data.description,
      choices: data.choices.map(choice => ({ ...choice, _id: expect.any(Object) }))
    });
  });




});
