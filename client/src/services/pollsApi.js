export const getPolls = () => {
  return fetch('/api/polls')
    .then(res => res.json());
};

export const getPoll = id => {
  return fetch(`/api/polls/${id}`)
    .then(res => res.json());
};
