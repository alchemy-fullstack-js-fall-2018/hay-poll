import { Schema, model } from 'mongoose';


const voteSchema = new Schema({
  pollId: {
    type: Schema.Types.ObjectId,
    ref: 'Poll',
    required: true
  },
  votes: {
    type: Schema.Types.ObjectId,
    ref: 'Poll.options',
    required: true
  }
});

export default model('Vote', voteSchema);
