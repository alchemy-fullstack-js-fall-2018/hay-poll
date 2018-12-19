import { connect } from 'react-redux';
import { getPolls } from '../../selectors/polls';
import { fetchPolls } from '../../actions/polls';
import Polls from '../../components/polls/Polls';

const mapStateToProps = state => {
  return { polls: getPolls(state) };
};

const mapDispatchToProps = dispatch => {
  return { fetchPolls: () => dispatch(fetchPolls()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Polls);
