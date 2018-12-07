# Hay Poll

Create a clone of [strawpoll](https://www.strawpoll.me/)

## Routes

* `POST /api/polls` create a new poll
* `GET /api/polls` get a list of polls
* `GET /api/polls/:id` get a poll by id
* `POST /api/polls/:id/votes` vote for a candidate
  * Note: check that the candidate exists
* `GET /api/polls/:id/results` get the results of a poll

## Models

* Poll
* Vote

## Tests

* e2e back-end tests
* unit test reducers, actions, selectors
* Snapshot test components
