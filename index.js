const express = require("express")
const connectDB = require("./config/db")
const keys = require("./config/keys")

const app = express()

connectDB()

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"))

  app.get("*", (req, res) => {
    ;(req, res) => res.send("API Running")

    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
})
