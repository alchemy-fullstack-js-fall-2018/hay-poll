import mongoose from 'mongoose';

const pollSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  choices: {
    type: [{ description: String }],
    validate: (choices) => choices.length !== 0
  }
});

export default mongoose.model('Poll', pollSchema);
