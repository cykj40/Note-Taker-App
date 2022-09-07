// dependencies
const express  = require('express');
const router = express.Router();
const uuid = require('uuid');
const Db = require('');

// set up /api/notes get route

router.get('/api/notes', async function (_req, res) { 
    const notes = await Db.readNotes();
    return res.json(notes);
});
// set up /api/notes post route 
router.post('/api/notes', async function (req, res)  {
const currentNotes = await Db.readNotes();

    let newNote = {
        id: uuid(),
        title: req.body.title,
        text: req.body.text
 };

await Db.addNote([...currentNotes, newNote]);

return res.send(newNote);
});

router.delete("/api/notes/:id", async function (req, res){
    const noteToDelete = req.params.id;
    const currentNotes = await Db.readNotes();
    const newNoteData = currentNotes.filter((note) => note.id !== noteToDelete);
    await Db.deleteNote(newNoteData);
    return res.send(newNoteData);
});

module.exports = router;
 


