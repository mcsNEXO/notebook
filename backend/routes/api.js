const express = require('express');
const router = express.Router();
const noteController = require('../controllers/notes-controller');

router.get('/notes', noteController.showAllNotes);
router.post('/notes', noteController.addNote)
module.exports = router;