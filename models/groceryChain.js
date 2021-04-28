const mongoose = require("mongoose")
const Schema = mongoose.Schema

const groceryChainSchema = new Schema({
  name: String,
  numCustomers: Number,
  greenInitiatives: [],
  executives: [],
  sustainabilityRating: String,
})

mongoose.model("groceryChain", groceryChainSchema)
