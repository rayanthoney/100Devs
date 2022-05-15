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

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
	if(req.url === '/') {
        res.end('<h1>Home</h1>');
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
