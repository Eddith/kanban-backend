// models/Board.js
const mongoose = require("mongoose");
const ListSchema = require("./List").schema;

const BoardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  lists: [ListSchema],
});

module.exports = mongoose.model("Board", BoardSchema);
