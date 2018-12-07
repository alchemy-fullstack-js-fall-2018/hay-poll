import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Prev from './Prev';
export default class CreatePoll extends PureComponent {
  static propTypes = {
    createPoll: PropTypes.func.isRequired
  };

  state = {
    title: '',
    choice: '',
    choices: []
  };

  updateChoice = ({ target }) => {
    this.setState({ choice: target.value });
  };

  updateTitle = ({ target }) => {
    this.setState({ title: target.value });
  };

  updateChoices = () => {
    const newChoice = this.state.choices.concat(this.state.choice);
    this.setState({ choices: newChoice });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, choices } = this.state;
    const { createPoll } = this.props;

    createPoll({ title, options: choices });
    console.log('state', this.state);
  };

  render() {
    const { title, choice, choices } = this.state;
    return (
      <div>
        <h1>Create A New Poll</h1>

        <label>Add Question</label>
        <input type="text" value={title} onChange={this.updateTitle} />

        <label>Add Options</label>
        <input type="text" value={choice} onChange={this.updateChoice} />
        <button onClick={this.updateChoices}>Add</button>
        <Prev question={title} choices={choices} />
        {choices.length > 1 && <button onClick={this.handleSubmit}>Create Poll</button>}
      </div>
    );
  }
}
