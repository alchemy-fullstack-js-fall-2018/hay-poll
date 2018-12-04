import mongoose, { Schema, model } from 'mongoose';

const voteSchema = new mongoose.Schema({
  poll: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Poll',
    required: true
  },
  selection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Poll.choices',
    required: true
  }
});

export default mongoose.model('Vote', voteSchema);
