export const getPolls = () => {
  return fetch('/api/polls')
    .then(res => res.json);
};

export const postVote = (id, vote) => {
  return fetch(`/api/polls/${id}/votes`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(vote)
  });

}