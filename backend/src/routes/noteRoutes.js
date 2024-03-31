const express = require('express');
const {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote,
    getNote,
} = require('../controllers/noteController');
const requireAuth = require('../middlewares/requireAuth');

const router = express.Router();

// require auth for all Note routes
router.use(requireAuth);

// GET all Notes
router.get('/', getAllNotes);

// POST a new Note
router.post('/', createNote);

// DELETE a Note
router.delete('/:id', deleteNote);

// UPDATE a Note
router.patch('/:id', updateNote);

//GET a single Note
router.get('/:id', getNote);


module.exports = router 