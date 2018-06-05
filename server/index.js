'use strict'

const express = require('express')
const session = require('express-session')
const mongo = require('mongodb')

const port = 4000

require('dotenv').config()

express()
  .use(express.static('static'))
  .use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  }))
  .get('/', all)
  .listen(port, console.log('listening on localhost:', port))

function all(req, res) {
  res.status(200)
  // if (err) {
  //   console.log('id:', err.id, 'title:', err.title, 'description:', err.description)
  // } else {
  res.send('Node and Express server is running on port ' + port)
  // }
}
