'use strict'

import {register, getUsers, getUserById, updateUser, deleteUser} from '../controllers/crm-controller'

const routes = app => {
  app.route('/users')
    .get((req, res, next) => {
      console.log('Request from', req.originalUrl)
      console.log('Request type', req.method)
      next()
    }, getUsers)

    .post(register)

  app.route('/users/:userId')
    .get(getUserById)

    .put(updateUser)
    .delete(deleteUser)
}

export default routes
