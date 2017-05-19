const express = require('express')
const router = express.Router()
const mongojs = require('mongojs')

const config = require('../config')

const db = mongojs("mongodb://" + config.dbuser + ":" + config.dbpassword + "@ds147551.mlab.com:47551/loccb_db", ["footballer"])

router.get("/", (req, res, next) => {
  db.footballer.find((err, data) => {
    if (err) {
      res.render("error", {title: "Error"})
    }
    res.render("footballer", {title: "Footballer list", data: data})
  })
})

module.exports = router
