const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: [true, 'The field is required'],
        minlength: [3, 'Min 3 characters!'],
    },
    description: {
        type: String,
        minlength: [5, 'The minimum number of characters is 5!'],
        required: [true, 'Min 5 characters!'],
        // trim: true,
    }
});
const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;