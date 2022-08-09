// -npm i 
// express // WEB FRAMEWORK USED TO CREATE ROUTES
// mongoose // CREATES DATABSE AND MODELS
// connect-mongo // STORES SESSIONS IN THE SERVER
// express-session // SESSIONS AND COOKIES
// express-handlebars // TEMPLATE ENGINE
// dotenv //  CONFIGURATION OF ENVIROMENT VARIABLES
// method-override // ALLOWS PUT AND DELETE REQUESTS METHODS
// moment // FORMAT DATES
// morgan // LOGIN 
// passport // AUTHENTICATION
// passport-google-oauth20 // AUTHENTICATION

// -npm i -D 
// nodemon // WATCHES SERVER AND RESTARTS IT AT CHANGE OR SAVE
// cross-env // START AND DEV SCRIPT 

const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

// LOAD CONFIG 
dotenv.config(  {   path: "./config/config.env"  })


// CONNECTING TO DATABASE
// connectDB()

// INITIALIZE EXPRESS APP
const app = express()

const PORT = process.env.PORT || 8500

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}! Betta go catch it!`))

