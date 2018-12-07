import { Schema, model } from 'mongoose';
import { compare, tokenize, hash, untokenize } from '../utils/auth';

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  passwordHash: String
}, {
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v;
      delete ret.passwordHash;
      return ret;
    }
  }
});

userSchema.virtual('password').set(function(password) {
  this._tempPassword = password;
});

userSchema.pre('save', function(next) {
  this.passwordHash = hash(this._tempPassword);
  next();
});

userSchema.methods.compare = function(clearPassword) {
  return compare(clearPassword, this.passwordHash);
};

userSchema.methods.authToken = function() {
  return tokenize(this.toJSON());
};

userSchema.statics.findByToken = function(token) {
  try {
    return Promise.resolve(untokenize(token));
  } catch(e) {
    console.log(e);
    return Promise.resolve(null);
  }
};

export default model('User', userSchema);
