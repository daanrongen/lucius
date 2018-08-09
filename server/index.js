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

function showUsers(req, res) {
  return res.send({
    user1: 'hoi'
  })
}

function showUsers(req, res) {
  const user1 = db.executeQuery()
  return res.send({user1})
}
