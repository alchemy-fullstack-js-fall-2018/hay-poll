export const getPolls = () => {
  console.log('is this thing on?');
  return fetch('/api/polls')
    .then(res => res.json());
};
