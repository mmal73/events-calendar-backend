const express = require('express');
require('dotenv').config();
const { dbConection } = require('./config/database');

// Create express server
const app = express();
// database
dbConection();

// main app
app.use( express.static('public') );

// Read and parse body of request
app.use( express.json() );

//routes
app.use('/api/auth', require('./routes/auth') );

// listen to requests
app.listen( process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
});
