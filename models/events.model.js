const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  email: { type: String },
  event: { type: String },
});
const Events = mongoose.model("events", EventSchema);

module.exports = Events;
