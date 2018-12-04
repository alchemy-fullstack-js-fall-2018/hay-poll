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

pollSchema.methods.results = function () {
  return this.model('Vote').aggregate([
    { $match: { poll: this._id } },
    { $group: { _id: null, count: { $sum: 1 } } }
  ]);
};

export default mongoose.model('Poll', pollSchema);
