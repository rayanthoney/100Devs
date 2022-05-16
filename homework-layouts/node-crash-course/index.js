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
	// if (req.url === "/") {
	// 	fs.readFile(
	// 		path.join(__dirname, "public", "index.html"),
	// 		(err, content) => {
	// 			if (err) throw err;
	// 			res.writeHead(200, { "Content-Type": "text/html" });
	// 			res.end(content);
	// 		}
	// 	);
	// }
	// if (req.url === "/api/users") {
	// 	const users = [
	// 		{ name: "Don Bobolina", age: 40 },
	// 		{ name: "Stan Smith", age: 30 },
	// 	];
	//     res.writeHead(200, { "Content-Type": "application/json" });
	//     res.end(JSON.stringify(users));
	// }

	// BUILD FILE PATH
	let filePath = path.join(
		__dirname,
		"public",
		req.url === "/" ? "index.html" : req.url
	);

	// GET THE EXTENSION OPF A FILE
	let extname = path.extname(filePath);

	// SET THE INITIAL CONTENT TYPE
	let contentType = "text/html";

	// CHECK EXTENSION AND SET CONTENT TYPE
	switch (extname) {
		case ".js":
			contentType = "text/javascript";
			break;
		case ".css":
			contentType = "text/css";
			break;
		case ".json":
			contentType = "application/json";
			break;
		case ".png":
			contentType = "image/png";
			break;
		case ".jpg":
			contentType = "image/jpg";
			break;
	}

	// READ FILE
	fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                // PAGE NOT FOUND
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.end(content, 'utf8');
                })
            } else {
                // SOME SERVER ERROR
                res.writeHead(500);
                res.end(`Server Error: ${er.code}`);
            }
        } else {
            // SUCCESS
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
