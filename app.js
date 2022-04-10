// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const room_details = require('./routes/api/Room_Details');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));



app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/Room_Details', room_details);


const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));