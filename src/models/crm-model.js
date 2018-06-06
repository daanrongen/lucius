'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

export const UsersSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
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
