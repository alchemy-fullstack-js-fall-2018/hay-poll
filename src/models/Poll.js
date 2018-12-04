import { Schema, model } from 'mongoose';

const pollSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  choices: {
    type: [{ description: String }]
  }
});

export default model('Poll', pollSchema);
