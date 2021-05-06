const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConection } = require('./config/database');

// Create express server
const app = express();

// database
dbConection();

//cors
app.use( cors() );

// main app
app.use( express.static('public') );

// Read and parse body of request
app.use( express.json() );

//routes
app.use('/api/auth', require('./routes/auth') );
app.use('/api/events', require('./routes/events') );

// listen to requests
app.listen( process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
});
