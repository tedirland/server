const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bankSchema = new Schema({
  name: String,
  numCustomers: Number,
  greenInitiatives: [],
  executives: [],
  sustainabilityRating: String,
})

mongoose.model("bank", bankSchema)
