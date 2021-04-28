const mongoose = require("mongoose")
const Schema = mongoose.Schema

const utilityProviderSchema = new Schema({
  name: String,
  numCustomers: Number,
  greenInitiatives: [],
  executives: [],
  sustainabilityRating: String,
})

mongoose.model("utilityProvider", utilityProviderSchema)
