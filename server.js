const express = require('express');
const app = express();

//import router function from web.js
const webRouter= require ('./routes/web')
const apiRouter= require ('./routes/api')


//configure port
const PORT = process.env.PORT || 3001;

// get middleware
app.use(express.static('public'));
app.use(express.json());

app.use(webRouter);
app.use(apiRouter);




app.listen(PORT, function() {
    console.log(`App is running on http://localhost:${PORT}`);
});

