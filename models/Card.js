// models/Board.js
const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  title: String,
  description: String,
  color: String,
});

module.exports = mongoose.model("Card", CardSchema);
