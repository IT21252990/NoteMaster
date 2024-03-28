const asyncHandler = require("express-async-handler");

const Note = require("../models/noteModel");

//@desc Get All Notes
//@route /api/notes/
//@access public
const getAllNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find();
  res.status(200).json(notes);
});

//@desc create a Note
//@route /api/notes/
//@access public
const createNote = asyncHandler(async (req, res) => {
  const { title, body, user } = req.body;
  if (!title || !body || !user) {
    res.status(404);
    throw new Error(" All fields are required");
  }
  const note = await Note.create({
    title,
    body,
    user,
  });

  res.status(201).json(note);
});



module.exports = {
  getAllNotes,
  createNote,
};
