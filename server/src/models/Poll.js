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

pollSchema.methods.results = function() {
  return this.model('Vote').aggregate([
    { $match: { pollId: this._id } },
    { $group: { _id: '$votes', count: { $sum: 1 } } }
  ]);
};

export default model('Poll', pollSchema);
