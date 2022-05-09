const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');

const { v4: uuidv4 } = require('uuid');
const { v4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const dbPath = path.join(__dirname, '..', 'db', 'db.json')

/**
 * 
 * @returns {Array}
 */


// function to retrieve the notes from database
function getNotes() {
    return JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
}

// save note to database
function saveNotes(notes){
fs.writeFileSync(dbPath, JSON.stringify(notes), 'utf-8')
}


router.get('/api/notes', (req, res) => {
    console.log('aaaa');

    res.json(getNotes());

});

router.post('/api/notes', (req, res) => {
    // create a new note
    console.log(req.body);
    // read the request for note title & text
    const { title, text } = req.body;
    
    // create id for each note
const createNote = {
    id: v4(),
    title: title,
    text: text,
}

    // save note to end of existing array
    const notes = getNotes();
    notes.push(createNote);

    saveNotes(notes);

    res.json({
        data: 'good',
    })

});
// delete notes
router.delete('/api/notes/:id', (req, res) => {

// get all notes
const notes = getNotes();

// select target note
const results =notes.filter((note) => {
    return note.id != req.params.id
});

// save new database
saveNotes(results);
res.json({
    data: 'good',
});
})

module.exports = router;