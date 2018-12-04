import Poll from '../Poll';
import { getErrors } from '../../utils/helpers';
const chance = require('chance').Chance();
import { mockPoll } from '../../utils/fixtures/poll';

describe('poll model', () => {

  test('validates a good model', () => {
    const data = mockPoll();
    const poll = new Poll(data);
    const jsonPoll = poll.toJSON();

    expect(jsonPoll).toEqual({
      ...data,
      _id: expect.any(Object),
      choices: data.choices.map(choice => ({ ...choice, _id: expect.any(Object) }))
    });
  });

  test('requires title, description, and choices', () => {
    const poll = new Poll({});
    const errors = getErrors(poll.validateSync(), 3);

    expect(errors.title.properties.message).toEqual('Path `title` is required.');
    expect(errors.description.properties.message).toEqual('Path `description` is required.');
    expect(errors.choices.properties.message).toEqual('Validator failed for path `choices` with value ``');
  });


});
