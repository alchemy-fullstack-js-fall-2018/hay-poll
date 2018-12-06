import fakePoll from '../fixtures/fakePoll.json';

export const postPoll = () => {
  return Promise.resolve(Object.values(fakePoll));
};
