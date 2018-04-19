'use strict'

var express = require('express')
var mongo = require('mongodb')
var ObjectID = require('mongodb').ObjectID

require('dotenv').config()

var db = null
var url = 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT

mongo.MongoClient.connect(url, function (err, client) {
  if (err) {
    throw err
  }
  db = client.db(process.env.DB_NAME)
  console.log('connected with mongodb, databasename:', db.databaseName)
})

express()
  .use(express.static('static'))
  .set('view engine', 'ejs')
  .set('views', 'view')
  .get('/', all)
  .get('/:id', detail)
  .listen(4000, console.log('listening on http:localhost:4000'))

function all(req, res) {
  res.status(200)
  var logEntries = db.collection('logEntries')

  logEntries.find().toArray(function (err, results) {
    if (err) {
      res.render('error.ejs', {id: err.id, title: err.title, description: err.description})
    } else {
      res.render('list.ejs', {data: results})
    }
  })
}

function detail(req, res) {
  var id = new ObjectID(req.params.id)

  db.collection('logEntries').findOne({
    _id: id
  }, done)

  function done(err, data) {
    if (err) {
      res.render('error.ejs', {id: err.id, title: err.title, description: err.description})
    } else {
      res.render('detail.ejs', {data: data})
    }
  }
}
