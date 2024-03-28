const asyncHandler = require("express-async-handler");

const Note = require("../models/noteModel");

//@desc Get All Notes
//@route /api/notes/
//@access public
const getAllNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find();
  res.status(200);
  res.json(notes);
});

module.exports = getAllNotes;