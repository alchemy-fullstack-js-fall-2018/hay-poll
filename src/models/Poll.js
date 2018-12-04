import { Schema, model } from 'mongoose';

const pollSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  options: {
    type: [{ choice: String }]
  }
});

export default model('Poll', pollSchema);
