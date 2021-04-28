const mongoose = require("mongoose")
const Schema = mongoose.Schema

const communitySchema = new Schema({
  name: String,
  county: String,
  zipCodes: [],
  greenInitiatives: [],
  commissioners: [],
  mayors: [],
  stateReps: [],
  stateSens: [],
  natRep: [],
  natSens: [],
})

mongoose.model("community", communitySchema)
