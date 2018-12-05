import {
  FETCH_POLLS, FETCH_POLLS_LOADING, FETCH_POLLS_END,
  FETCH_POLL_END, fetchPolls, FETCH_POLL,
  fetchPoll, FETCH_POLL_LOADING, createPoll, CREATE_POLL, CREATE_POLL_LOADING, CREATE_POLL_END,
} from './polls';

jest.mock('../services/polls');

describe('polls actions', () => {

  it('FETCH_POLLS has a payload that is a promise', () => {
    const action = fetchPolls();
    expect(action.payload.then).toBeInstanceOf(Function);
  });

  it('has a type of FETCH_POLLS with a start and end property', () => {
    const action = fetchPolls();
    expect(action.type).toEqual(FETCH_POLLS);
    expect(action.start).toEqual(FETCH_POLLS_LOADING);
    expect(action.end).toEqual(FETCH_POLLS_END);
  });

  it('FETCH_POLL has a payload that is a promise', () => {
    const action = fetchPoll();
    expect(action.payload.then).toBeInstanceOf(Function);
  });

  it('has a type of FETCH_POLL with a start and end property', () => {
    const action = fetchPoll();
    expect(action.type).toEqual(FETCH_POLL);
    expect(action.start).toEqual(FETCH_POLL_LOADING);
    expect(action.end).toEqual(FETCH_POLL_END);
  });

  it('CREATE_POLL has a payload that is a promise', () => {
    const action = createPoll();
    expect(action.payload.then).toBeInstanceOf(Function);
  });

  it('has a type of CREATE_POLL with a start and end property', () => {
    const action = createPoll();
    expect(action.type).toEqual(CREATE_POLL);
    expect(action.start).toEqual(CREATE_POLL_LOADING);
    expect(action.end).toEqual(CREATE_POLL_END);
  });
});
