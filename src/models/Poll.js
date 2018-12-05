import { Schema, model } from 'mongoose';

const pollSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  candidates: {
    type: [{ name: String }]
  }
}, {
  toJSON: {
    transform: (doc, ret) => {
      delete ret.__v;
      return ret;
    }
  }
});

export default model('Poll', pollSchema);
