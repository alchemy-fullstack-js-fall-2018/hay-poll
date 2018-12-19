import mongoose from 'mongoose';

const voteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  poll: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Poll',
    required: true
  },
  option: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Poll.options',
    required: true
  }
});

export default mongoose.model('Vote', voteSchema);
