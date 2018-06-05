'use strict'

import routes from '../src/routes/crm-routes'

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const port = 4000

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/CRMdb')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

routes(app)

app.get('/', all)
  .listen(port, console.log('listening on localhost:', port))

function all(req, res) {
  res.status(200)
  res.send('Node and Express server is running on port ' + port)
}
