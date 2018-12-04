import { Router } from 'express';
import Poll from '../../models/Poll';
import Vote from '../../models/Vote';

export default Router()
  .post('/', (req, res, next) => {
    const { title, candidates } = req.body;

    Poll.create({ title, candidates })
      .then(poll => res.json(poll))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Poll
      .find()
      .lean()
      .then(polls => res.json(polls))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const { id } = req.params;

    Poll.findById(id)
      .lean()
      .then(poll => res.json(poll))
      .catch(next);
  })

  .post('/:id/votes', (req, res, next) => {

    const { id } = req.params.id;
    const votes = req.body;

    Poll.findById(id)
      .then(poll => {
        return poll.candidates
          .map(candidate_ => ({
            candidateId: candidate_.id,
            candidateName: candidate.name,
            vote: votes[candidate._id] || -1
          }))
          .filter(({ vote }) => vote !== -1);
        })
        .then(votes => Vote.create({ pollId: id, votes }))
        .then(vote => res.json(vote))
        .catch(next);
  })

  .get('/:id/results', (req, res) => {
    const { id } = req.params;

    Poll.findById(id)
      .then(poll => poll.results())
      .then(results => res.json(results));
  });
