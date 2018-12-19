import { connect } from 'react-redux';
import PollDetail from '../../components/polls/PollDetail';
import { getPoll } from '../../selectors/polls';
import { fetchPoll } from '../../actions/polls';

const mapStateToProps = (state, props) => ({
  poll: getPoll(state, props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  fetchPoll: id => dispatch(fetchPoll(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollDetail);
