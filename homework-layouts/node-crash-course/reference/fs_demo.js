const fs = require('fs');
const path = require('path');

// CREATE FOLDER ON SYSTEM
fs.mkdir(path.join(__dirname, "/test"), {}, err => {
    if(err) throw err;
    console.log('Folder created...')
});

// CREATE AND WRITE TO FILE
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), {}, err => {
    if (err) throw err;
    console.log('Folder created...');
});