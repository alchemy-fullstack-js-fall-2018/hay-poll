import { Schema, model } from 'mongoose';

const pollSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  candidates: [{
    name: {
      type: String,
      required: true
    }
  }]
});

export default model('Poll', pollSchema)
