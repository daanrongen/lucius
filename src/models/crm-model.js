const mongoose = require('mongoose')

const {Schema} = mongoose
// Use Mongoose Passport for password encryption

export const UsersSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
})

export const fsrSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  fsrValue: {
    type: Boolean
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
})
