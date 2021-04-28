const express = require("express")
const mongoose = require("mongoose")
const keys = require("./config/keys")

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

const app = express()

app.get("/", (req, res) => {
  res.send({ hi: "there" })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Listening in Port ${PORT}`)
})
