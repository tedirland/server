const express = require("express")
const mongoose = require("mongoose")
const keys = require("./config/keys")

const app = express()

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

app.get("/", (req, res) => res.send("API Running"))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Listening in Port ${PORT}`)
})
