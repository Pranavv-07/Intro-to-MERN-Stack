// 1. Import the built-in 'http' module
const http = require('http');
const hostname = '127.1.0.1'; 
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/plain');

  res.end('Hello, World!\nWelcome to my Node.js Server!');
});

server.listen(port, hostname, () => {

  console.log(`🚀 Server running at http://${hostname}:${port}/`);
});