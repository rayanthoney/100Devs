//   npm init  
// npm install express mongoose ejs dotenv cors
// npm install nodemon --save-dev

//  "start": "nodemon server.js"


// declare variables
const express = require('express');
const app = express();
const PORT = 8500;
const mongoose = require('mongoose');

// ADD MODEL VARIABLE
const TodoTask = require('./models/todotask')

require('dotenv').config();



// MIDDLEWARE (TELLS SERVER WHERE TO LOOK FOR STUFF)
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true }, () => {console.log('We are connected to the db!');})


// GET METHOD
app.get('/', async (req, res) => {
    try {
        TodoTask.find({}, (err, tasks) => {
            res.render('index.ejs', {todoTasks: tasks})
        } )
    } catch (err) {
        if (err) return res.status(500).send(err)
    }
})


// START SERVER
app.listen(PORT, () => console.log(`Server is running on port! ${PORT} You Betta go and catch it!`))