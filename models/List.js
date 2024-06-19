// models/Board.js
const mongoose = require("mongoose");
const CardSchema = require("./Card").schema;

const ListSchema = new mongoose.Schema({
  name: String,
  cards: [CardSchema],
});

module.exports = mongoose.model("List", ListSchema);
