const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: [true, 'The field is required'],
        minlength: [3, 'The minimum number of characters is 3!'],
    },
    description: {
        type: String,
        required: [true, 'The field is required!'],
        trim: true,
    }
});
const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;