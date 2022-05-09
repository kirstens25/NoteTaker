const express = require('express');
const app = express();
const PORT = 3001;

// get middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    const indexHtmlPath = path.join(__dirname, 'public', 'index.html')
    res.sendFile(indexHtmlPath);
})

app.get('/notes', (req, res) => {
    const notesHtmlPath = path.join(__dirname, 'public', 'notes.html')
    res.sendFile(notesHtmlPath);
});
app.listen(PORT, function() {
    console.log(`App is running on http://localhost:${PORT}`);
});
