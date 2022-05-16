// console.log('Hello 100Devs and welcome to Node.js')

// const Person = require('./person');

// const person1 = new Person('Ray Anthoney', 30);

// person1.greeting();

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log("Called Listener",data));

// logger.log('Hello World');
// logger.log('Hewo');
// logger.log('Whats up!');

// CREATING AND SERVING AN HTML PAGE
const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
	if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
        })
    }
	if(req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
        })
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
