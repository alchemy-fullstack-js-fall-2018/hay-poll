import React, { PureComponent } from 'react';
import PollPreview from './PollPreview';
// import { createPoll } from '../../actions/polls';

export default class CreatePoll extends PureComponent {
  static propTypes = {
  };

  state = {
    issue: '',
    option: '',
    options: []
  };

  updateOption = ({ target }) => {
    this.setState({ option: target.value });
  };

  updateIssue = ({ target }) => {
    this.setState({ issue: target.value });
  };

  updateOptionsArray = () => {
    const newOption = this.state.options.concat(this.state.option);
    this.setState({ options: newOption });
  };

  handleSubmit = event => {
    const { issue, options } = this.state;
    const { createPoll } = this.props;
    event.preventDefault();

    const formattedOptions = options.map(option => {
      return ({ choice: option });
    });

    createPoll({ issue: issue, options: formattedOptions });
  };

  render() {
    const { issue, option, options } = this.state;
    return (
      <div>
        <h1>Create Poll!</h1>

        <label>Add Issue</label>
        <input type="text" value={issue} onChange={this.updateIssue} />

        <label>Add Option</label>
        <input type="text" value={option} onChange={this.updateOption} />
        <button onClick={this.updateOptionsArray}>Add Option</button>
        <PollPreview issue={issue} options={options} />
        {options.length > 1 && <button onClick={this.handleSubmit}>Create Poll</button>}
      </div>
    );
  }
}
