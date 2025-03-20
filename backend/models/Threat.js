const mongoose = require("mongoose");

const ThreatSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Threat", ThreatSchema);
