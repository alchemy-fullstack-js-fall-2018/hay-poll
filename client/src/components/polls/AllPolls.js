import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default class AllPolls extends PureComponent {

  static propTypes = {
    polls: PropTypes.array.isRequired
  }

  componentDidMount() {
    const { fetchPolls } = this.props;
    fetchPolls();
  }



  render() {
    const { polls } = this.props;
    const pollsList = polls.map(poll => {
      return (
        <div key={poll._id}>
          <Link to={ROUTES.POLL_DETAIL.linkTo(poll._id)}>{poll.issue}</Link>
        </div>
      );
    });

    return (
      <div>
        <ul>{pollsList}</ul>
      </div>
    );
  }
}
