'use strict'

import {addNewUser} from '../controllers/crm-controller'

const routes = app => {
  app.route('/users')
    .get((req, res, next) => {
      // Middleware
      console.log('Request from', req.originalUrl)
      console.log('Request type', req.method)
      next()
    }, (req, res, next) => {
      res.send('GET request succesful')
    })

    .post(addNewUser)

  app.route('/users/:userId')
    .put((req, res) =>
      res.send('PUT request succesful'))
    .delete((req, res) =>
      res.send('DELETE request succesful'))
}

export default routes
