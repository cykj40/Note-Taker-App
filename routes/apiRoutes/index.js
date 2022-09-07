// dependencies
import { Router } from 'express';
const router = Router();
import uuid from 'uuid';
import { readNotes, addNote, deleteNote } from '';

// set up /api/notes get route

router.get('/api/notes', async function (_req, res) { 
    const notes = await readNotes();
    return res.json(notes);
});
// set up /api/notes post route 
router.post('/api/notes', async function (req, res)  {
const currentNotes = await readNotes();

    let newNote = {
        id: uuid(),
        title: req.body.title,
        text: req.body.text
 };

await addNote([...currentNotes, newNote]);

return res.send(newNote);
});

router.delete("/api/notes/:id", async function (req, res){
    const noteToDelete = req.params.id;
    const currentNotes = await readNotes();
    const newNoteData = currentNotes.filter((note) => note.id !== noteToDelete);
    await deleteNote(newNoteData);
    return res.send(newNoteData);
});

export default router;
 


