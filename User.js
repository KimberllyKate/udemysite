const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  school: String,
  password: String,
  userId: String,
  isAdmin: { type: Boolean, default: false },
  notifications: [{
    message: String,
    date: Date,
    read: Boolean
  }],
  messages: [{
    text: String,
    date: Date,
    fromAdmin: Boolean
  }]
});

module.exports = mongoose.model('User', userSchema);
