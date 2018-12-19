import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Poll from './Poll';

export default class Polls extends PureComponent {
  static propTypes = {
    polls: PropTypes.array.isRequired,
    fetchPolls: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { fetchPolls } = this.props;
    fetchPolls();
  }

  render() {
    const { polls } = this.props;
    console.log('polls', polls);
    const pollsComponents = polls.map(poll => {
      return <Poll key={poll._id} poll={poll} />;
    });

    return <div>{pollsComponents}</div>;
  }
}
