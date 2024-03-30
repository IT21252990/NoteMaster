const asyncHandler = require("express-async-handler");

const Note = require("../models/noteModel");
const User = require("../models/userModel");

//@desc Get All Notes
//@route /api/notes/
//@access private
const getAllNotes = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user || user.role !== "User") {
    res.status(403);
    throw new Error("Admin has not access for this Route");
  } else {
    const notes = await Note.find();
    if (!notes) {
      throw new Error("No Notes available to show !");
    }
    res.status(200).json(notes);
  }
});

//@desc create a Note
//@route /api/notes/
//@access private
const createNote = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user || user.role !== "User") {
    res.status(403);
    throw new Error("Admin has not access for this Route");
  } else {
    const { title, body } = req.body;
    if (!title || !body) {
      res.status(404);
      throw new Error(" All fields are required");
    }
    const note = await Note.create({
      title,
      body,
      user,
    });

    res.status(201).json(note);
  }
});

//@desc Update a Note
//@route /api/notes/:id
//@access private
const updateNote = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user || user.role !== "User") {
    res.status(403);
    throw new Error("Admin has not access for this Route");
  } else {
    const note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404);
      throw new Error("Note not found");
    }

    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedNote);
  }
});

//@desc delete a Note
//@route /api/notes/:id
//@access private
const deleteNote = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user || user.role !== "User") {
    res.status(403);
    throw new Error("Admin has not access for this Route");
  } else {
    const note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404);
      throw new Error("Note not found");
    }

    await Note.deleteOne();
    res.status(200).json(note);
  }
});

//@desc Get a single Note
//@route /api/notes/:id
//@access private
const getNote = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user || user.role !== "User") {
    res.status(403);
    throw new Error("Admin has not access for this Route");
  } else {
    const note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404);
      throw new Error("Note not found");
    }
    res.status(200).json(note);
  }
});

module.exports = {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
  getNote,
};
