const mongoose = require("mongoose");

const launchesSchema = new mongoose.Schema({
  flightNumber: { type: Number, required: true },
  mission: { type: String, required: true },
  rocket: { type: String, required: true },
  launchDate: { type: Date, required: true },
  target: { type: String},
  customers: [String],
  upcoming: { type: Boolean, requiered: true },
  success: { type: Boolean, requiered: true, default: true },
});

//Connects launchesSchema with the "launches" collection

module.exports = mongoose.model("Launch", launchesSchema);
