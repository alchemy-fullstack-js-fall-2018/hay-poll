import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ROUTES } from '../../app/App.jsx';
import { postPoll } from '../../services/polls';

@withRouter
export default class PollCreate extends PureComponent {
  constructor(props) {
    super(props);
    this.candidates = React.createRef();
  }

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  addCandidate = () => {
    const input = document.createElement('input');
    input.setAttribute('name', 'candidate');
    this.candidates.current.appendChild(input);
  };

  handleSubmit = event => {
    event.preventDefault();
    const { target } = event;

    const poll = [...target.querySelectorAll('input')]
      .reduce((acc, input) => {
        if(input.getAttribute('name') === 'title') acc.title = input.value;
        if(input.getAttribute('name') === 'candidate') acc.candidates.push({ name: input.value });

        return acc;
      }, { candidates: [] });

    postPoll(poll)
      .then(() => this.props.history.push(ROUTES.POLLS.linkTo()));
  };

  render() {
    return (
      <>
        <h2>Create a Poll</h2>
        <form ref={this.form} onSubmit={this.handleSubmit}>
          <input name="title" />
          <div ref={this.candidates}>

          </div>
          <button type="button" onClick={this.addCandidate}>Add Candidate</button>
          <button>Submit</button>
        </form>
      </>
    );
  }
}
