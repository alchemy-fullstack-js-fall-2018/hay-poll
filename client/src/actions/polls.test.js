import { createPoll, CREATE_POLL, LOAD_POLL_START, LOAD_POLL_END } from './polls';

jest.mock('../services/pollsApi.js');

describe('actions', () => {
  it('calls a promise as a payload', () => {
    const action = createPoll({});
    expect(action.type).toEqual(CREATE_POLL);
    expect(action.loadStart).toEqual(LOAD_POLL_START);
    expect(action.loadEnd).toEqual(LOAD_POLL_END);
    expect(typeof action.payload.then).toBe('function');
  });
});
