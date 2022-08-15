const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/db')

// LOAD CONFIG 
dotenv.config({ path: "./config/config.env" })

// PASSPORT CONFIG
require('./config/passport')(passport)

// CONNECTING TO DATABASE
connectDB()

// INITIALIZE EXPRESS APP
const app = express()

// LOGGING
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// HANDLEBARS
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main', 
    extname: '.hbs'
    })
)
app.set('view engine', '.hbs')
// app.set('views', './views');

// PASSPORT SESSION
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    })
  }))

// PASSPORT MIDDLEWARE
app.use(passport.initialize())
app.use(passport.session())

// STATIC FOLDERS
app.use(express.static(path.join(__dirname, 'public')))

// ROUTES
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}! Betta go catch it!`))

