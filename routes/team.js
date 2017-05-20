const express = require('express')
const router = express.Router()
const mongojs = require('mongojs')

const config = require('../config')

const db = mongojs("mongodb://" + config.dbuser + ":" + config.dbpassword + "@ds147551.mlab.com:47551/loccb_db", ["team"])

router.get("/", (req, res, next) => {
  db.team.find((err, data) => {
    if (err) {
      res.send(err)
    }
    res.send(data)
  })
})

module.exports = router
