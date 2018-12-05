const polls = [
  {
    title: 'poll one',
    candidates: [
      {
        name: 'ham'
      },
      {
        name: 'jam'
      }
    ]
  },
  {
    title: 'poll two',
    candidates: [
      {
        name: 'lamb'
      },
      {
        name: 'spam'
      }
    ]
  }
];

export const getPolls = () => {
  return Promise.resolve(polls);
};
