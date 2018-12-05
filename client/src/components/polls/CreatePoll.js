import React, { PureComponent } from 'react';
import PollPreview from './PollPreview';
// import { createPoll } from '../../actions/polls';

export default class CreatePoll extends PureComponent {
  static propTypes = {
  };

  state = {
    question: '',
    option: '',
    options: []
  };

  updateOption = ({ target }) => {
    this.setState({ option: target.value });
  };

  updateQuestion = ({ target }) => {
    this.setState({ question: target.value });
  };

  updateOptionsArray = () => {
    const newOption = this.state.options.concat(this.state.option);
    this.setState({ options: newOption });
  };

  handleSubmit = event => {
    const { question, options } = this.state;
    const { createPoll } = this.props;
    event.preventDefault();

    const formattedOptions = options.map(option => {
      return ({ choice: option });
    });

    createPoll({ issue: question, options: formattedOptions });
  };

  render() {
    const { question, option, options } = this.state;
    return (
      <div>
        <h1>Create Poll!</h1>

        <label>Add Question</label>
        <input type="text" value={question} onChange={this.updateQuestion} />

        <label>Add Option</label>
        <input type="text" value={option} onChange={this.updateOption} />
        <button onClick={this.updateOptionsArray}>Add Option</button>
        <PollPreview question={question} options={options} />
        {options.length > 1 && <button onClick={this.handleSubmit}>Create Poll</button>}
      </div>
    );
  }
}
