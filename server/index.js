'use strict'

const express = require('express')

const app = express()
const port = 4000

app
  .use(express.static('src'))
  .set('view engine', 'ejs')
  .set('views', 'view')
  .get('/', all)
  .listen(port, console.log('listening on localhost:', port))

function all(req, res) {
  res.render('index.ejs')
}
