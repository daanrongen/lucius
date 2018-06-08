'use strict'

import {addNewUser, getUsers, getUserById, updateUser, deleteUser, getData, addNewValue} from '../controllers/crm-controller'

const routes = app => {
  app.route('/')
    .get((req, res) => {
      res.send('<h1>hello world</h1>')
    })

  app.route('/users')
    .get((req, res, next) => {
      next()
    }, getUsers)
    .post(addNewUser)

  app.route('/fsr')
    .get((req, res, next) => {
      next()
    }, getData)
    .post(addNewValue)

  app.route('/users/:userId')
    .get(getUserById)

    .put(updateUser)
    .delete(deleteUser)
}

export default routes
