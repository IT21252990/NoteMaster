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

//@desc Update a Note
//@route /api/notes/:id
//@access public
const updateNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    res.status(404);
    throw new Error("Note not found");
  }

  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedNote);
});

//@desc delete a Note
//@route /api/notes/:id
//@access public
const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    res.status(404);
    throw new Error("Note not found");
  }

  await Note.deleteOne();
  res.status(200).json(note);
});

//@desc Get a single Note
//@route /api/notes/:id
//@access public
const getNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404);
      throw new Error("Note not found");
    }
  res.status(200).json(note);
});

module.exports = {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
  getNote
};
