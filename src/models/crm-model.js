const mongoose = require('mongoose')

// const Schema = mongoose.Schema

const {Schema} = mongoose

export const UsersSchema = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
})
