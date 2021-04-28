const mongoose = require("mongoose")
const Schema = mongoose.Schema

const employerSchema = new Schema({
  name: String,
  numEmployees: Number,
  greenInitiatives: [],
  executives: [],
  sustainabilityRating: String,
})

mongoose.model("employer", employerSchema)
