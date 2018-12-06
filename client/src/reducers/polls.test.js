import reducer from './polls';
import { LOAD_POLL_START, CREATE_POLL } from '../actions/polls';
import { fakePoll } from '../fixtures/fakePoll';

describe('polls reducer', () => {
  const initialState = {
    allPolls: {},
    currentPoll: {},
    loading: false
  };

  it('creates a new poll in state when CREATE_POLL action occurs', () => {
    const action = { type: CREATE_POLL, payload: fakePoll };
    const updatedState = reducer(initialState, action);
    expect(updatedState).toEqual({ ...initialState, currentPoll: fakePoll });
  });

  it('changes loading to true when LOAD_POLL_START action occurs', () => {
    const action = { type: LOAD_POLL_START };
    const updatedState = reducer(initialState, action);
    expect(updatedState).toEqual({ ...initialState, loading: true });
  });
});
