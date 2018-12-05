import { connect } from 'react-redux';
import PollDetail from '../components/polls/PollDetail';
import {  } from '../services/pollsApi';
import { onVote } from '../actions/polls';


const mapStateToProps = state => ({
  poll: getPoll(state)
});

const mapDispatchToProps = dispatch => ({
  onVote: ({ target }) => dispatch(onVote(target.value))
});

connect(
  mapStateToProps,
  mapDispatchToProps
)(PollDetail);
