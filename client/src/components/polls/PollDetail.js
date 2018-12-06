import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class PollDetail extends PureComponent {
  static propTypes = {
    poll: PropTypes.object.isRequired,
    submitVote: PropTypes.func.isRequired
  };

  state = {
    choices: [],
    buttonType: 'radio'
  };

  componentDidMount() {
    const { fetchPoll } = this.props;
    const id = this.props.match.params.id;
    fetchPoll(id);
  }

  handleSubmit = event => {
    const { choices } = this.state;
    const vote = { vote: choices };
    const id = this.props.match.params.id;
    event.preventDefault();
    this.props.submitVote(id, vote);
    this.props.history.push(`/poll/${id}/results`);
  };

  handleInputChange = ({ target }) => {
    let newChoices = this.state.choices.concat(target.value);
    this.setState({ choices: newChoices });
  };

  render() {
    const { issue, options } = this.props.poll;
    const optionList = options && options.map((option, i) => {
      return (
        <Fragment key={i}>
          <label>{option.choice}</label>
          <input
            type={this.state.buttonType}
            value={option.choice}
            onChange={this.handleInputChange}
          />
        </Fragment>
      );
    });

    return (
      <div>
        <h1>{issue}</h1>
        <form onSubmit={this.handleSubmit}>
          <ul>{optionList}</ul>
          <button>Vote!</button>
        </form>
      </div>
    );
  }
}
