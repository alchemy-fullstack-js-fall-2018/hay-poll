import {
  FETCH_POLLS, FETCH_POLLS_LOADING, FETCH_POLLS_END,
  FETCH_POLL_END, fetchPolls, FETCH_POLL,
  fetchPoll, FETCH_POLL_LOADING,
} from './polls';

jest.mock('../services/polls');

describe('polls actions', () => {

  it('has a payload that is a promise', () => {
    const action = fetchPolls();
    expect(action.payload.then).toBeInstanceOf(Function);
  });

  it('has a type of FETCH_POLLS with a start and end property', () => {
    const action = fetchPolls();
    expect(action.type).toEqual(FETCH_POLLS);
    expect(action.start).toEqual(FETCH_POLLS_LOADING);
    expect(action.end).toEqual(FETCH_POLLS_END);
  });

  it('has a payload that is a promise', () => {
    const action = fetchPoll();
    expect(action.payload.then).toBeInstanceOf(Function);
  });

  it('has a type of FETCH_POLL with a start and end property', () => {
    const action = fetchPoll();
    expect(action.type).toEqual(FETCH_POLL);
    expect(action.start).toEqual(FETCH_POLL_LOADING);
    expect(action.end).toEqual(FETCH_POLL_END);
  });
});
