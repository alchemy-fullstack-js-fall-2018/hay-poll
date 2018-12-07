import { Schema, model } from 'mongoose';

const voteSchema = new Schema({
  pollId: { type: Schema.Types.ObjectId, ref: 'Poll' },
  votes: {
    type: [{
      candidateId: {
        type: String,
        required: true
      },
      candidateName: {
        type: String,
        required: true
      },
      vote: {
        type: Number,
        required: true
      }
    }],
  }
});

export default model('Vote', voteSchema);
