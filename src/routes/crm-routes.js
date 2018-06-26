'use strict'

import {
  addNewUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getData,
  addNewValue
} from '../controllers/crm-controller'

const routes = app => {
  app.route('/').get((req, res) => {
    res.render('welcome.ejs')
  })

  app
    .route('/users')
    .get((req, res, next) => {
      next()
    }, getUsers)
    .post(addNewUser)

  app
    .route('/fsr')
    .get((req, res, next) => {
      next()
    }, getData)
    .post(addNewValue)

  app
    .route('/users/:userId')
    .get(getUserById)

    .put(updateUser)
    .delete(deleteUser)
}

export default routes
