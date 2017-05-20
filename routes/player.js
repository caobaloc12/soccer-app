const express = require('express')
const router = express.Router()
const mongojs = require('mongojs')

const config = require('../config')
const collections = ["player"]
const dbUrl = "mongodb://" + config.dbuser + ":" + config.dbpassword + "@ds147551.mlab.com:47551/loccb_db"
const db = mongojs(dbUrl, collections)

router.get("/:teamId", (req, res, next) => {
  db.player.find({teamId: req.params.teamId}, (err, data) => {
    if (err) {
      res.send(err)
    }
    res.send(data)
  })
})

module.exports = router
