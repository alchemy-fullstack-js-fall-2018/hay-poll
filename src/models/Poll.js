import mongoose from 'mongoose';

const pollSchema = new mongoose.Schema({

  issue: {
    type: String,
    required: true
  },
  options: [{
    choice: {
      type: String,
      required: true
    }
  }]
});

export default mongoose.model('Poll', pollSchema)
