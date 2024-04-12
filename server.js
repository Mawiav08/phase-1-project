const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;

const server = http.createServer((req, res) => {
    // Set the content type to JSON
    res.setHeader('Content-Type', 'application/json');

    // Read the db.json file
    fs.readFile(path.join(__dirname, 'db.json'), (err, data) => {
        if (err) {
            console.error('Error reading db.json:', err);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Internal server error' }));
            return;
        }

        // Serve the JSON data
        res.statusCode = 200;
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
