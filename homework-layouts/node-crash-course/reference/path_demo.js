const { Console } = require('console');
const path = require('path');

// BASE FILE NAME (USING PATH MODULE)
console.log(path.basename(__filename));

// DIRECTORY NAME (USING PATH MODULE)
console.log(path.dirname(__filename));

// FILE EXTENSION (USING PATH MODULE)
console.log(path.extname(__filename));

// CREATE PATH OBJECT
console.log(path.parse(__filename));

// CONCATENATE PATHS
console.log(path.join(__dirname, 'test', 'hello.html'))