const http = require('http');
// Define the affirmations data
const affirmations = [
  "You are capable of achieving your goals.",
  "You are loved and appreciated.",
  "You have the power to create change.",
  "You are worthy!"
];

// the HTTP server
const server = http.createServer((req, res) => {
  // Set CORS headers to allow requests from any origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
  // Handle GET requests to /affirmations
  if (req.url === '/affirmations' && req.method === 'GET') {
    // Set Content-Type header
    res.setHeader('Content-Type', 'application/json');
    
    // Convert affirmations array to JSON and send it as response
    res.end(JSON.stringify(affirmations));
  } else {
    // If the request is not to /affirmations, return 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Start the server on port 3001
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
