const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CountySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
})

module.exports = County = mongoose.model("county", CountySchema)

// name: String,
// communities: [],
// zipCodes: [],
// greenInitiatives: [],
// commissioners: [],
// mayors: [],
// stateReps: [],
// stateSens: [],
// nonProfits: [],
// k12Schools: [],
// higherEd: [],
