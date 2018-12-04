import mongoose from 'mongoose';

const voteSchema = new mongoose.Schema({
  pollId: {
    type: Schema.Types.ObjectId, ref: 'Poll'
  },
  candidateId: {
    type: String,
    required: true
  },
  candidateName: {
    type: String,
    required: true
  },
});

export default mongoose.model('Vote', voteSchema)
