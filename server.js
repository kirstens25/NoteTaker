const express = require('express');
const app = express();

//import router function from web.js
const webRouter= require ('./routes/web')
const apiRouter= require ('./routes/api')


//configure port
const PORT = 3001;

app.use(webRouter);
app.use(apiRouter);

// get middleware
app.use(express.static('public'));


app.listen(PORT, function() {
    console.log(`App is running on http://localhost:${PORT}`);
});

