const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// REST API endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello, World!" });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});