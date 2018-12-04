export const getPolls = () => {
  return fetch('/api/polls', { headers: { 'Authorize': 'token!' } })
    .then(res => res.json());
};
