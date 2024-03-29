const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    const indexHtmlPath = path.join(__dirname, '..', 'public', 'index.html')
    res.sendFile(indexHtmlPath);
})

router.get('/notes', (req, res) => {
    const notesHtmlPath = path.join(__dirname, '..', 'public', 'notes.html')
    res.sendFile(notesHtmlPath);
});

module.exports = router;