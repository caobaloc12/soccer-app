const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

const index = require('./routes/index')
const player = require('./routes/player')
const team = require('./routes/team')

const port = process.env.PORT || 3000
app.set("port", port)

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.engine('html', require('ejs').renderFile)

app.use(express.static(path.join(__dirname, "clientSrc")))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/", index)
app.use("/api/team", team)
app.use("/api/player", player)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
