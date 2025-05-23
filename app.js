/*
Name - Cardell
File name - app.js

File purpose - This file is the second part of the Express.js application.
It displays a simple "Hello, World!" message when the user accesses the /api/hello endpoint. 
*/

const express = require('express');
const path = require('path');
const app = express();

// This is where the static files are served from" 
app.use(express.static(path.join(__dirname, 'public')));

// REST API endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello, World!" });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});