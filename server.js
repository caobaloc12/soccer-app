const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

const index = require('./routes/index')
const footballer = require('./routes/footballer')
const team = require('./routes/team')

const port = process.env.PORT || 3000
app.set("port", port)

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "jade")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/", index)
app.use("/team", team)
app.use("/footballer", footballer)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
