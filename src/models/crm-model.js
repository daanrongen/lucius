'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

export const UsersSchema = new Schema({
  username: {
    type: String,
    required: 'Enter a username'
  },
  password: {
    type: String,
    required: 'Enter a password'
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
})
