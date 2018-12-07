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

pollSchema.methods.results = function() {
  return this.model('Vote').aggregate([
    { $match: { pollId: this._id } },
    { $unwind: '$votes' },
    { $group:
        { _id:
            { choiceId: '$votes.choiceId', choiceName: '$votes.choiceName' },
            totalVotes: { $sum: 1 }
        }
    }
  ])
}

export default mongoose.model('Poll', pollSchema)
