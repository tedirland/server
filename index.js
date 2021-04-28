const express = require("express")
const mongoose = require("mongoose")
const keys = require("./config/keys")

const app = express()

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Listening in Port ${PORT}`)
})
