import { connect } from 'react-redux';
import { getPolls } from '../../selectors/polls';
import { List } from '../../components/List';
import PollCard from './PollCard';
import { fetchPolls } from '../../actions/polls';
import { Fetch } from '../../components/Fetch';

const mapStateToProps = state => ({
  list: getPolls(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchPolls())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  Fetch(
    List(
      PollCard,
      { idKey: '_id', spread: true }
    ),
    { dataKey: 'polls', defaultValue: [] }
  )
);
