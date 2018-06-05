'use strict'

import {addNewUser, getUsers, getUserById} from '../controllers/crm-controller'

const routes = app => {
  app.route('/users')
    .get((req, res, next) => {
      // Middleware
      console.log('Request from', req.originalUrl)
      console.log('Request type', req.method)
      next()
    }, getUsers)

    .post(addNewUser)

  app.route('/users/:userId')
    .get(getUserById)

    .put((req, res) =>
      res.send('PUT request succesful'))
    .delete((req, res) =>
      res.send('DELETE request succesful'))
}

export default routes
