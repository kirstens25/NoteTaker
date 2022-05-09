const express = require('express');
const path = require('path');
const router = express.Router();

const fs = require('fs');
const dbPath = path.join(__dirname, '..', 'db', 'db.json')

// function to retrieve the notes from database
function getNotes(){
return JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
}

router.get('/api/notes', (req, res) => {
    console.log('aaaa');
res.json(getNotes());

})



module.exports = router;