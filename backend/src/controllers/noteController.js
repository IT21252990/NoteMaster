const Note = require("../models/noteModel");
const mongoose = require('mongoose');

//@desc Get All Notes
//@route /api/notes/
//@access private
const getAllNotes = async (req, res) => {
  const user_id = req.user._id;

  const notes = await Note.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(notes);
};

//@desc create a Note
//@route /api/notes/
//@access private
const createNote = async (req, res) => {
  const { title, body } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!body) {
    emptyFields.push("body");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add doc to db
  try {
    const user_id = req.user._id;
    const note = await Note.create({ title, body, user_id });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//@desc Update a Note
//@route /api/notes/:id
//@access private
const updateNote = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Note'})
  }

  const note = await Note.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!note) {
    return res.status(400).json({error: 'No such Note'})
  }

  res.status(200).json(note)
}

//@desc delete a Note
//@route /api/notes/:id
//@access private
// delete a workout
const deleteNote = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Note'})
  }

  const note = await Note.findOneAndDelete({_id: id})

  if (!note) {
    return res.status(400).json({error: 'No such Note'})
  }

  res.status(200).json(note)
}

//@desc Get a single Note
//@route /api/notes/:id
//@access private
// get a single workout
const getNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Note" });
  }

  const note = await Note.findById(id);

  if (!note) {
    return res.status(404).json({ error: "No such Note" });
  }

  res.status(200).json(note);
};

module.exports = {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
  getNote,
};
