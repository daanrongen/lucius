'use strict'

import {UsersSchema} from '../models/crm-model'

const mongoose = require('mongoose')

const User = mongoose.model('Users', UsersSchema)

export const addNewUser = (req, res) => {
  let newUser = new User(req.body)

  newUser.save((err, user) => {
    if (err) {
      res.send(err)
    } else {
      res.json(user)
    }
  })
}
