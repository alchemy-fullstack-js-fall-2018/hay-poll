import { connect } from 'react-redux';
import Results from '../components/results/Results';
import { fetchResults } from '../actions/results';
import { fetchPoll } from '../actions/polls';
import { getResults } from '../selectors/results';
import { getPoll } from '../selectors/polls';

const mapStateToProps = state => ({
  results: getResults(state),
  // poll: getPoll(state)
});


const mapDispatchToProps = dispatch => ({
  // fetchPoll: id => dispatch(fetchPoll(id)),
  fetchResults: id => dispatch(fetchResults(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
