const mongoose = require("mongoose")
const Schema = mongoose.Schema

const zipCodeSchema = new Schema({
  name: String,
  counties: [],
  communities: [],
  greenInitiatives: [],
  commissioners: [],
  stateRep: [],
  stateSen: [],
  natReps: [],
  natSens: [],
})

mongoose.model("zipCode", zipCodeSchema)
