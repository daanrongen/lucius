'use strict'

const express = require('express')

express()
  .use(express.static('static'))
  .get('/', all)
  .get('/allUsers', showUsers)
  .listen(4000, console.log('listening on localhost:4000'))

function all(req, res) {
  res.render('/index.html')
}
