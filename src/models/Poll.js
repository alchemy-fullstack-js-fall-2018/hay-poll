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
    type: [{ description: String }],
    validate: function(v) {
      return v.length !== 0;
    }
  }
});

export default model('Poll', pollSchema);
