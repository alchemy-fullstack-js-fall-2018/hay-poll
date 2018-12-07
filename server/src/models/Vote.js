import mongoose from 'mongoose';

const voteSchema = new mongoose.Schema({
  pollId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Poll'
  },
  votes: [{
    choiceId: String,
    choiceName: String
  }]
})

export default mongoose.model('Vote', voteSchema)
