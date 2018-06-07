'use strict'

import routes from '../src/routes/crm-routes'

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const port = 4000

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/delta')

app
  .use(express.static('public'))
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .listen(port, console.log('listening on localhost:', port))

routes(app)
