import { connect } from 'react-redux';
import { getPolls } from '../../selectors/polls';
import { fetchPolls } from '../../actions/polls';
import { withFetch } from '../../components/withFetch';
import withList from '../../components/withList';
import Poll from '../../components/poll/Poll';

const mapStateToProps = state => ({
  list: getPolls(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchPolls())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(
  withList(Poll)
));
