import mongoose from 'mongoose';

const pollSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  options: [
    {
      option: {
        type: String,
        required: true
      }
    }
  ]
});

export default mongoose.model('Poll', pollSchema);
