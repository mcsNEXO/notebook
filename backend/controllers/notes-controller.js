const Note = require('../db/models/Note');

class NoteController {
    async showAllNotes(req, res) {
        let doc;
        try {
            doc = await Note.find({});
        } catch (e) {
            return res.status(500).json({ message: e.message });
        }
        res.status(200).json(doc);
    };
    async addNote(req, res) {
        const title = req.body.title;
        const description = req.body.description;
        let note;
        try {
            note = new Note({
                title,
                description
            });
            await note.save();
        } catch (e) {
            return res.status(422).json({ message: e.message });
        };
        res.status(201).json(note);
    };
    async deleteNote(req, res) {
        const id = req.params.id;
        await Note.deleteOne({ _id: id });
        res.sendStatus(204);
    }
    async editNote(req, res) {
        try {
            const id = req.params.id
            const title = req.body.title;
            const description = req.body.description;

            const note = await Note.findOne({ _id: id })
            note.title = title
            note.description = description
            await note.save()
            res.status(201).json(note)
        }
        catch (e) {
            return res.status(422).json({ message: e.message });
        }
    }
};
module.exports = new NoteController();