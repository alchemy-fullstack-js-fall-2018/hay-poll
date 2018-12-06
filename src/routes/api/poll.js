import { Router } from 'express';
import Poll from '../../models/Poll';
//import Vote from '../../models/Vote';
//import requireAuth from '../../middleware/requireAuth';

export default Router()
  .post('/polls', (req, res, next) => {
    const { title, candidates } = req.body;
    Poll.create({ title, candidates })
      .then(poll => res.json(poll))
      .catch(next);
  })

  .get('/polls', (req, res, next) => {
    Poll.find()
      .select({ __v: false })
      .lean()
      .then(polls => res.json(polls))
      .catch(next);
  })

  .delete('/polls/:id', (req, res, next) => {
    const { id } = req.params;

    Poll.findByIdAndDelete(id)
      .then(poll => res.json({ removed: !!poll }))
      .catch(next);
  })

  .get('/polls/:id', (req, res, next) => {
    const { id } = req.params;

    Poll.findById(id)
      .lean()
      .then(poll => res.json(poll))
      .catch(next);
  });

// .post('/polls/:id/votes', requireAuth, (req, res) => {
//   const { id } = req.params;
//   const votes = req.body;

//   Poll.findById(id)
//     .then(poll => {
//       return poll.candidates
//         .map(candidate => ({
//           candidateId: candidate._id,
//           candidateName: candidate.name,
//           vote: votes[candidate._id] || -1
//         }))
//         .filter(({ vote }) => vote !== -1);
//     })
//     .then(votes => Vote.create({ pollId: id, votes }))
//     .then(vote => res.json(vote));
// })

// .get('/polls/:id/votes', (req, res) => {
//   const { id } = req.params;

//   Vote.find({ pollId: id })
//     .lean()
//     .then(vote => res.json(vote));
// })

// .get('/polls/:id/results', (req, res) => {
//   const { id } = req.params;

//   Poll.findById(id)
//     .then(poll => poll.results())
//     .then(results => res.json(results));
// });
