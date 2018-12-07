import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { fetchPoll } from '../../actions/polls';

export default class Results extends PureComponent {

  static propTypes = {
    results: PropTypes.object.isRequired,
    fetchResults: PropTypes.func.isRequired,

  };

  componentDidMount() {
    const { fetchResults } = this.props;
    const id = this.props.match.params.id;
    fetchResults(id);
    // fetchPoll(id);
  }

  render() {
    // const { results, poll } = this.props;

    return (
      <div>
        <h1>Results for </h1>
      </div>
    );
  }
}
