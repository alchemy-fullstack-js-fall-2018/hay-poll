import { Router } from 'express';
import Poll from '../../models/Poll';
import Vote from '../../models/Vote';

export default Router()
  .post('/', (req, res, next) => {
    const { issue, options } = req.body;

    Poll.create({ issue, options })
      .then(poll => res.json(poll))
      .catch(next)
  })

  .get('/', (req, res, next) => {
    Poll
      .find()
      .lean()
      .then(polls => res.json(polls))
      .catch(next)
  })

  .get('/:id', (req, res, next) => {
    const { id } = req.params;

    Poll.findById(id)
      .then(poll => res.json(poll))
      .catch(next)
  })

  .post('/:id/votes', (req, res, next) => {
    const { id } = req.params;
    const { votes } = req.body;

    Poll.findById(id)
      .then(poll => {
        const choices = poll.options.filter(element => votes.includes(element.choice));
        return {
          pollId: poll._id,
          votes: choices.map(choice => ({
            choiceId: choice._id,
            choiceName: choice.choice
          }))
        };
      })
      .then(vote => {
        Vote.create({
          pollId: id,
          votes: vote.votes
        })
        .then(votes => {
          res.json(votes)
        })
      })
      .catch(next)
  })

  .get('/:id/results', (req, res, next) => {
    const { id } = req.params;
    Poll.findById(id)
      .then(poll => poll.results())
      .then(results => res.json(results))
      .catch(next)
  })
