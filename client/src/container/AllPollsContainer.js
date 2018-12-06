import { connect } from 'react-redux';
import AllPolls from '../components/polls/AllPolls';
import { getAllPolls } from '../selectors/polls';
import { fetchPolls } from '../actions/polls';

const mapStateToProps = state => ({
  polls: getAllPolls(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPolls: () => dispatch(fetchPolls())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPolls);
