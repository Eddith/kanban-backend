// routes/boards.js
const express = require("express");
const router = express.Router();
const Board = require("../models/Board");

//TODO: GET all boards
router.get("/", async (req, res) => {
  try {
    const boards = await Board.find();
    res.json(boards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//TODO: GET a single board by ID
router.get("/:id", async (req, res) => {
  try {
    const board = await Board.findById(req.params.id);
    if (!board) {
      return res.status(404).json({ message: "Board not found" });
    }
    res.json(board);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//TODO: CREATE a new board
router.post("/save", async (req, res) => {
  const board = new Board({
    title: req.body.title,
    lists: req.body.lists,
  });

  try {
    const newBoard = await board.save();
    res.status(201).json(newBoard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//TODO: UPDATE a board by ID
router.put("/:id", async (req, res) => {
  try {
    const board = await Board.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!board) {
      return res.status(404).json({ message: "Board not found" });
    }
    res.json(board);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//TODO: DELETE a board by ID
router.delete("/:id", async (req, res) => {
  try {
    const board = await Board.findByIdAndDelete(req.params.id);
    if (!board) {
      return res.status(404).json({ message: "Board not found" });
    }
    res.json({ message: "Board deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
