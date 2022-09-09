const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
// const mainRoutes = require('./routes/main')
// const todoRoutes = require('./routes/todos')

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
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
// app.use(passport.initialize())
// app.use(passport.session())

app.use(flash())
  
// Add Routes Here
// app.use('/', mainRoutes)
// app.use('/todos', todoRoutes)
 
app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${PORT}, you better catch it!`)
})   