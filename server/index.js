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

app.use(express.static('public'))

app.get('/', all)
  .listen(port, console.log('listening on localhost:', port))

function all(req, res) {
  res.status(200)
  console.log(req.session)
  res.send('<h1>Project Delta</h1>' + '<h2>beta</h2>' + '<form action="/users" method="post">' + '<input type="text" name="username" placeholder="username" autofocus>' + '<input type="password" name="password" placeholder="password">' + '<input type="submit" value="login">' + '</form>')
}
