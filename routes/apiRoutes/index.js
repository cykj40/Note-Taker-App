// dependencies
const fs = require('fs');
const db = require('../../db/db.json')
const router = require('express').Router();
const uniqid = require('uniqid');

// set up /api/notes get route

router.get('/api/notes', (_req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        console.log(JSON.parse(data));
        res.send(data)
    })
})
// set up /api/notes post route 
router.post('/api/notes', (req, res) => {


    let newNote = {
        id: uniqid(),
        title: req.body.title,
        text: req.body.text
    }

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        let newData = JSON.parse(data);

        newData.push(newNote);
        console.log(newData)

        fs.writeFile('./db/db.json', JSON.stringify(newData), (err) => {
            if (err) throw err;
            res.send('succesfully added');
        })
    });
})



module.exports = router;



