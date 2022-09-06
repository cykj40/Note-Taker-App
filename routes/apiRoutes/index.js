// dependencies
const fb  = require('express').Router();
const { readAndAppend, readFromFile } = require('../../helpers/fsutils');
const uuid = require('../../helpers/uuid')

// set up /api/notes get route

fb.get('/api/notes', (_req, res) => 
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);
// set up /api/notes post route 
fb.post('/api/notes', (req, res) => {
const { title, text } = req.body;
if (title && text) {
    const newNote = {
        id: uuid(),
        title: req.body.title,
        text: req.body.text
 };

 readAndAppend(newNote, './db/db.json');

 const response = {
    status: 'success',
    body: newNote,
 };

 res.json(response);
}else {
    res.json('Error in posting Note');
}

    // updates json file when info is added or pushed
});


module.exports = fb;