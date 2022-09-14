const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')

// Serve Favicon
const favicon = require('serve-favicon')
const path = require('path')
 
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// Require routes
const indexRouter = require('./routes/index')
const loginRouter = require('./routes/login')
const menuRouter = require('./routes/menu')

// Database String
require('dotenv').config({path: './config/.env'})

// Passport config
// require('./config/passport')(passport)

connectDB()
// html framework
app.set('view engine', 'ejs')
// static files folder ie-css, images, js
app.use(express.static('public'))
// parse url using json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// morgan provides detailed logs using the dev config
app.use(logger('dev'))

// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({mongoUrl: process.env.DB_STRING}),
    })
  )
  
// Passport middleware
// app.use(passport.initialize())
// app.use(passport.session())

app.use(flash())
  
// Add Routes Here
app.use('/', indexRouter )
app.use('/menu', menuRouter)
app.use('/login', loginRouter)

 
app.listen(process.env.PORT, ()=>{
  console.log('Server is running, you better catch it!')
})  