# Hay Poll

Create a clone of [strawpoll](https://www.strawpoll.me/)

## Routes

* `POST /api/polls` create a new poll
* `GET /api/polls` get a list of polls
* `GET /api/polls/:id` get a poll by id
* `POST /api/polls/:id/votes` vote for a candidate
  * Note: check that the candidate exists
* `GET /api/polls/:id/results` get the results of a poll
* `POST /api/auth/signup` signup a user
* `POST /api/auth/login` login a user
* `GET /api/auth/verify` verify a user by token

## Requirements

* Must be logged in to vote
* Must be logged in to create poll
* Must be logged in to see poll results
* Do NOT have to be logged in to see poll and polls list

## Models

* Poll
* Vote
* User

## BONUS

* User can only vote once per poll

## Tests

* e2e back-end tests
* unit test reducers, actions, selectors
* Snapshot test components
