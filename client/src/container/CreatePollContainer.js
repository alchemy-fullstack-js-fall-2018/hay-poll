import { connect } from 'react-redux';
import { createPoll } from '../actions/polls';
import CreatePoll from '../components/polls/CreatePoll';

const mapDispatchToProps = dispatch => ({
  createPoll: poll => dispatch(createPoll(poll))
});

export default connect(
  null,
  mapDispatchToProps
)(CreatePoll);
