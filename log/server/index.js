'use strict'

var express = require('express')

express()
  .use(express.static('static'))
  .set('view engine', 'ejs')
  .set('views', 'view')
  .get('/', all)
  .listen(4000, console.log('listening on http:localhost:4000'))

function all(req, res) {
  res.status(200)
  res.render('list.ejs')
}
