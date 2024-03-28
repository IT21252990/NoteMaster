const express = require('express');
const router = express.Router();

const {getAllNotes , createNote , updateNote , deleteNote , getNote} = require('../controllers/noteController');

router.get("/" , getAllNotes);

router.post("/" , createNote);

router.put("/:id" , updateNote);
 
router.delete("/:id" , deleteNote);

router.get("/:id" , getNote);


module.exports = router;