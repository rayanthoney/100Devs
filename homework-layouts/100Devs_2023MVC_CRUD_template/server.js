// todo - declare Variables::
const express = require('express');
var cors = require('cors')
const app = express();
const PORT = 8000
const mongoose =require('mongoose');

    // *Import function/routes

// todo - Connect to Database

// todo - Set Middleware

app.set('view engine', 'ejs');
app.set(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(cors());

// todo - Set Routes

// todo - Start Server
app.listen(PORT, () => console.log(`Server is running on ${PORT}, you better go catch it!`))






