import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class PollDetail extends PureComponent {
  static propTypes = {
    poll: PropTypes.object,
    fetchPoll: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { fetchPoll } = this.props;
    const id = this.props.match.params.id;
    fetchPoll(id);
  }

  submitVote() {
    
  }

  render() {
    const { poll } = this.props;
    if(!poll) return null;

    const optionsItems = poll.options.map(option => {
      return (
        <label key={option._id}>
          <h4>{option.option}</h4>
          <p>{option.description}</p>
          <input type="radio" name="poll" value={option.option} />
        </label>
      );
    });

    return (
      <Fragment>
        <form onSubmit={this.submitVote}>
          <h3>{poll.title}</h3>
          {optionsItems} <br />
          <button>Submit Vote</button>
        </form>
      </Fragment>
    );
  }
}

export default withRouter(PollDetail);
