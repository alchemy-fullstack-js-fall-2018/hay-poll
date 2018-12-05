import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PollPreview from './PollPreview';

export default class CreatePoll extends Component {
  static propTypes = {
  }

  state = {
    title: '',
    option: '',
    options: []
  };

  updateOption = ({ target }) => {
    this.setState({ option: target.value });
  };

  updateTitle = ({ target }) => {
    this.setState({ title: target.value });
  };


  updateOptionsArray = () => {
    const newOption = this.state.options.concat(this.state.option);
    this.setState({ options: newOption });

  }

  render() {
    const { title, option, options } = this.state;
    return (
      <div>
        <h1>Create Poll!</h1>

        <label>Add Title</label>
        <input type="text" value={title} onChange={this.updateTitle} />

        <label>Add Option</label>
        <input type="text" value={option} onChange={this.updateOption} />
        <button onClick={this.updateOptionsArray}>Add</button>
        <PollPreview title={title} options={options} />
      </div>
    );
  }
}
