import mongoose from 'mongoose';
import { hash, compare } from '../utils/auth/hashing';
import { tokenize, untokenize } from '../utils/auth/tokenizer';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true
    },
    passwordHash: String
  },
  {
    toJSON: {
      transform: function(doc, ret) {
        delete ret.__v;
      }
    }
  }
);

userSchema.virtual('password').set(function(password) {
  this._tempPassword = password;
});

userSchema.pre('save', function(next) {
  this.passwordHash = hash(this._tempPassword);
  next();
});

userSchema.methods.compare = function(password) {
  return compare(password, this.passwordHash);
};

userSchema.methods.authToken = function() {
  const jsonUser = this.toJSON();
  return tokenize(jsonUser);
};

userSchema.statics.findByToken = function(token) {
  try {
    const user = untokenize(token);
    return Promise.resolve(user);
  } catch (e) {
    return Promise.resolve(null);
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
