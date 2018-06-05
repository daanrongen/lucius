'use strict'

import {UsersSchema} from '../models/crm-model'

const mongoose = require('mongoose')

const User = mongoose.model('Users', UsersSchema)

export const addNewUser = (req, res) => {
  const newUser = new User(req.body)

  newUser.save((err, user) => {
    if (err) {
      res.send(err)
    } else {
      res.json(user)
    }
  })
}

export const getUsers = (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      res.send(err)
    } else {
      res.json(user)
    }
  })
}

export const getUserById = (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    if (err) {
      res.send(err)
    } else {
      res.json(user)
    }
  })
}
