import { connect } from 'react-redux';
import { createPoll } from '../actions/polls';
import CreatePoll from '../components/polls/CreatePoll';
import { getPoll } from '../selectors/polls';

const mapStateToProps = state => ({
  poll: getPoll(state)
});

const mapDispatchToProps = dispatch => ({
  createPoll: poll => dispatch(createPoll(poll))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePoll);
