const mongoose = require("mongoose")
const Schema = mongoose.Schema

const topicSchema = new Schema({
  diet: [],
  conversationPieces: [],
  nonprofit: [],
  localgov: [],
  stategov: [],
  composting: [],
  envjustice: [],
  ev: [],
  publicTransport: [],
  homeEnergy: [],
  stateWide: [],
})

mongoose.model("topic", topicSchema)
