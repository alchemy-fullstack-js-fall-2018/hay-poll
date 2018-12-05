import mockPollsJson from '../fixtures/polls.json';
import mockPollJson from '../fixtures/poll.json';
import mockGetResults from '../fixtures/results.json';
import mockPostPoll from '../fixtures/postPoll.json';
import mockPostVote from '../fixtures/postVote.json';

const polls = mockPollsJson;
const poll = mockPollJson;

export const getPolls = () => {
  return Promise.resolve(polls);
};

export const getPoll = () => {
  return Promise.resolve(poll);
};
