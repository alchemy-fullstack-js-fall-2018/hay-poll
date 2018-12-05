import { connect } from 'react-redux';
import PollDetail from '../components/polls/PollDetail';
import { getPolls } from '../services/pollsApi';
import { submitVote } from '../actions/polls';


const mapStateToProps = state => ({
  poll: getPolls(state)
});

const mapDispatchToProps = dispatch => ({
  onVote: ({ target }) => dispatch(submitVote(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollDetail);
