import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Fetch } from '../../lib/Fetch.jsx';
import { fetchPoll } from '../../../store/resources/polls/actions';
import { getPoll } from '../../../store/resources/polls/selectors';
import { getResults } from '../../../store/resources/results/selectors';
import { fetchResults } from '../../../store/resources/results/actions';
import { postVotes } from '../../../services/polls';
import styled from 'styled-components';

const StyledLi = styled.li`
  list-style: none;
`;

export const PollDetail = ({ poll, results }) => {
  if(!poll) return null;

  const choicesComponent = poll.choices
    .map(choice => <StyledLi key={choice._id}>{choice.description}</StyledLi>);

  const resultsComponent = results
    .sort((a, b) => a.count - b.count)
    .map(result => <StyledLi key={result._id}>{result.description} - {result.count} votes</StyledLi>);

  return (
    <section>
      <h2>{poll.title}</h2>
      <p>{poll.description}</p>
      <h3>Choices</h3>
      <ul>{choicesComponent}</ul>
      <h3>Results</h3>
      <ul>{resultsComponent}</ul>
    </section>
  );

};

PollDetail.propTypes = {
  match: PropTypes.object.isRequired,
  poll: PropTypes.object,
  results: PropTypes.array
};

const mapStateToProps = state => ({
  poll: getPoll(state),
  results: getResults(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    const { id } = props.match.params;
    dispatch(fetchPoll(id));
    dispatch(fetchResults(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fetch(PollDetail));
