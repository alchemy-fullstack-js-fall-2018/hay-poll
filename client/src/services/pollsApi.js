export const getPolls = () => {
  return fetch('/api/polls')
    .then(res => res.json());
};

export const postVote = (id, vote) => {
  return fetch(`/api/polls/${id}/votes`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(vote)
  });
};

export const postPoll = poll => {
  return fetch('/api/polls', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(poll)
  })
    .then(res => res.json());
};
