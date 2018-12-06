import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { fetchPoll } from '../../actions/polls';
import { withFetch } from '../../components/withFetch';
import { getPoll } from '../../selectors/polls';
import { getResults } from '../../selectors/results';
import { fetchResults } from '../../actions/results';
import { postVotes } from '../../../services/polls';

class PollDetails extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    poll: PropTypes.object,
    results: PropTypes.array
  };

  state = {
    voteOrder: []
  };

  componentDidMount() {

  }

  componentDidUpdate(oldProps) {
    if(oldProps !== this.props) {
      if(this.props.poll) this.setState({ voteOrder: this.props.poll.candidates });
    }
  }

  submitVotes = () => {
    const votes = this.state.voteOrder
      .map((vote, i) => ({
        id: vote._id,
        name: vote.name,
        vote: i + 1
      }));
    postVotes(this.props.match.params.id, votes);
  };

  handleDrag = (result) => {
    const voteOrder = [...this.state.voteOrder];
    const [item] = voteOrder.splice(result.source.index, 1);
    voteOrder.splice(result.destination.index, 0, item);

    this.setState({ voteOrder });
  };

  render() {
    const { poll, results } = this.props;
    if(!poll) return null;

    const resultsComponent = results
      .sort((a, b) => a.avgVote - b.avgVote)
      .map(result => <li key={result.candidateId}>{result.candidateName} - {result.avgVote}</li>);

    const candidateInputs = this.state.voteOrder.map((candidate, i) => {
      return (
        <Draggable key={candidate._id} draggableId={candidate._id} index={i}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <div>{candidate.name}</div>
            </div>
          )}
        </Draggable>
      );
    });

    return (
      <>
        <h1>{poll.title}</h1>
        <h2>Candidates</h2>
        <ul>
          {poll.candidates.map(candidate => <li key={candidate._id}>{candidate.name}</li>)}
        </ul>
        <h2>Results</h2>
        <ul>
          {resultsComponent}
        </ul>
        <form onSubmit={this.submitVotes}>
          <DragDropContext onDragEnd={this.handleDrag}>
            <Droppable droppableId="candidates">
              {(provided) => (
                <div ref={provided.innerRef}>
                  {candidateInputs}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <button>Vote</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  poll: getPoll(state),
  results: getResults(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    const { id } = props.match.params;
    dispatch(fetchPoll(id));
    dispatch(fetchResults(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(PollDetails));
