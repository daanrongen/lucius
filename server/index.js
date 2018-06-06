'use strict'

import routes from '../src/routes/crm-routes'

const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const port = 4000

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/CRMdb')

routes(app)

app
  .use(express.static('public'))
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  }))
  .set('view engine', 'ejs')
  .set('views', 'public')
  .get('/', all)
  .listen(port, console.log('listening on localhost:', port))

function all(req, res) {
  res.status(200)
  res.send('<h1>Delta</h1>')
}
