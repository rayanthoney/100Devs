// DECLARE VARIABLES
const express = require('express')
const app = express()
const PORT = 8500
const mongoose = require('mongoose')
require('dotenv').config();

// ADD MODEL VARIABLE
// const TodoTask = require('./models/todoask')

// ADD MIDDLEWARE (TELLS SERVER WHERE TO LOOK FOR STUFF!)
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => {console.log('We are connected to the db!')} )


// START SERVER
app.listen(PORT, () => console.log(`Server is running on port! ${PORT} You Betta go and catch it!`))
