export const getPolls = () => {
  return fetch('/api/polls')
    .then(res => res.json());
};
