const express = require('express');
require('dotenv').config();

// Create express server
const app = express();

app.use( express.static('public') );
//routes
app.get('/test', (req, res) => {
    res.json({
        status: 'ok'
    });
})

// listen to requests
app.listen( process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
});
