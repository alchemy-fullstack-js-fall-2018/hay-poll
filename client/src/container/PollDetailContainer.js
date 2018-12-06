import { connect } from 'react-redux';
import PollDetail from '../components/polls/PollDetail';
import { getPoll } from '../selectors/polls';
import { submitVote, fetchPoll } from '../actions/polls';


const mapStateToProps = state => ({
  poll: getPoll(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPoll: id => dispatch(fetchPoll(id)),
  submitVote: (id, vote) => dispatch(submitVote(id, vote))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollDetail);
