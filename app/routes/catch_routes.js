const Catch = require('../models/catch')
const handle = require('../../lib/error_handler')

module.exports = function (app, db) {
  // create
  app.post('/catches', (req, res) => {
    Catch.create(req.body)
      .then(record => {
        console.log(record)
        return record
      })
      .then(record => {
        res.status(201).json(record.toJSON())
      })
      .catch(err => handle(err, res))
  })

  // index
  app.get('/catches', (req, res) => {
    Catch.find()
      .then(records => {
        return records.map(record => record.toJSON())
      })
      .then(records => {
        console.log(records)
        res.status(200).json(records)
      })
      .catch(err => handle(err, res))
  })
}