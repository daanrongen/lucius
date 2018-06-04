'use strict'

var express = require('express')

express()
  .use(express.static('static'))
  .get('/', all)
  .listen(4000, console.log('listening on localhost:4000'))

function all(req, res) {
  res.status(200)
  console.log('visitor arrived')
}
