const express = require('express');
const router = express.Router();

const {getAllNotes , createNote , updateNote} = require('../controllers/noteController');

router.get("/" , getAllNotes);

router.post("/" , createNote);

// router.get("/:id" , getNoteById);

router.put("/:id" , updateNote);

// router.delete("/:id" , deleteNote);

module.exports = router;