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

  handleSubmit = event => {
    const { choices } = this.state;
    event.preventDefault();
    this.props.submitVote(this.props.match.params.id, choices);
  };

  handleInputChange = ({ target }) => {
    let newChoices = this.state.choices.concat(target.value);
    this.setState({ choices: newChoices });
  };

  render() {
    const { poll } = this.props;
    const { title, options } = poll;

    const optionList = options.map((option, i) => {
      return (
        <Fragment key={i}>
          <label>{option}</label>
          <input
            type={this.state.buttonType}
            value={option}
            onChange={this.handleInputChange}
          />
        </Fragment>
      );
    });

    return (
      <div>
        <h1>{title}</h1>
        <form onSubmit={this.handleSubmit}>
          <ul>{optionList}</ul>
          <button>Vote!</button>
        </form>
      </div>
    );
  }
}
