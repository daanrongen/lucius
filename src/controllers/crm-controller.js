import {UsersSchema, fsrSchema} from '../models/crm-model'

const mongoose = require('mongoose')

const User = mongoose.model('users', UsersSchema)
const Value = mongoose.model('fsrdatas', fsrSchema)

// API for User Database
export const addNewUser = (req, res) => {
  const newUser = new User(req.body)
  newUser.save((err, user) => {
    if (err) {
      res.send(err)
    }
    res.json(user)
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

export const updateUser = (req, res) => {
  User.findOneAndUpdate(
    {_id: req.params.userId},
    req.body,
    {new: true},
    (err, user) => {
      if (err) {
        res.send(err)
      } else {
        res.json(user)
      }
    }
  )
}

export const deleteUser = (req, res) => {
  User.remove({_id: req.params.userId}, err => {
    if (err) {
      res.send(err)
    } else {
      res.json({message: 'succesfully deleted user'})
    }
  })
}

// API for FSR Database
export const getData = (req, res) => {
  Value.find({}, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.json(data)
    }
  })
}

export const addNewValue = (req, res) => {
  const newValue = new Value(req.body)
  newValue.save((err, data) => {
    if (err) {
      res.send(err)
    }
    res.json(data)
  })
}
