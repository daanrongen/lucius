'use strict'

var express = require('express')
var mongo = require('mongodb')
var ObjectID = require('mongodb').ObjectID
var date = require('date-and-time')
var bodyParser = require('body-parser')

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
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json())
  .set('view engine', 'ejs')
  .set('views', 'view')
  .get('/', all)
  .get('/add', form)
  .get('/:id', detail)
  .post('/add', addLogEntry)
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

function form(req, res) {
  try {
    res.status(200).render('form.ejs')
  } catch (err) {
    res.render('error.ejs', {id: err.id, title: err.title, description: err.description})
  }
}

function addLogEntry(req, res) {
  var now = new Date()
  var logEntries = db.collection('logEntries')

  logEntries.insertOne({
    dateAdded: date.format(now, 'ddd D MMMM'),
    title: req.body.title,
    goal: req.body.goal,
    tags: [req.body.tagOne, req.body.tagTwo, req.body.tagThree, req.body.tagFour],
    text: req.body.text
  }, done)

  function done(err, data) {
    if (err) {
      res.render('error.ejs', {id: err.id, title: err.title, description: err.description})
    } else {
      res.redirect('/' + data.insertedId)
    }
  }
}
