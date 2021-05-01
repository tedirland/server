const express = require("express")
const connectDB = require("./config/db")
const keys = require("./config/keys")

const app = express()

connectDB()

// Init Middleware

app.use(express.json({ extended: true }))

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"))

  app.get("*", (req, res) => {
    ;(req, res) => res.send("API Running")

    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

app.use("/api/counties", require("./routes/api/counties"))
app.use("/api/communities", require("./routes/api/communities"))
app.use("/api/auth", require("./routes/api/auth"))
app.use("/api/topics", require("./routes/api/topics"))
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
})
