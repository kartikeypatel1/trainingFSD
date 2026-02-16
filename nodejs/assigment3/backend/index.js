const http = require('http');
const fs = require('fs');
const path = require('path');

// Sync read is fine for initial startup
const shoePage = fs.readFileSync('index.html'); 

const myserver = http.createServer((req, res) => {
    console.log(`Request received for: ${req.url}`);

    
});

myserver.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});