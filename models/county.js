const mongoose = require("mongoose")
const Schema = mongoose.Schema

const countySchema = new Schema({
  name: String,
  communities: [],
  zipCodes: [],
  greenInitiatives: [],
  commissioners: [],
  mayors: [],
  stateReps: [],
  stateSens: [],
  natRep: [],
  natSens: [],
})

mongoose.model("county", countySchema)
