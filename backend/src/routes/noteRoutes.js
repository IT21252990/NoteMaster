const express = require('express');
const router = express.Router();

const {getAllNotes , createNote , updateNote , deleteNote , getNote} = require('../controllers/noteController');
const validateToken = require('../middlewares/validateTokenHandler');

router.get("/" , validateToken , getAllNotes);

router.post("/" ,validateToken, createNote);

router.put("/:id" ,validateToken, updateNote);
 
router.delete("/:id" ,validateToken, deleteNote);

router.get("/:id" ,validateToken, getNote);


module.exports = router;