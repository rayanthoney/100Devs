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

// BODY PARSER
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// LOGGING
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// HANDLEBARS HELPER
const { formatDate, stripTags, truncate, editIcon } = require('./helpers/hbs')

// HANDLEBARS
// !ADDED THE WORD '.engine' AFTER 'exphbs' to prevent error
app.engine('.hbs', exphbs.engine({
    helpers: {
        formatDate,
        stripTags,
        truncate,
        editIcon,
    },
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

// SET GLOBAL VARIABLE
app.use(function (req, res, next) {
    res.locals.user = req.user || null
    next()
})

// STATIC FOLDERS
app.use(express.static(path.join(__dirname, 'public')))

// ROUTES
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/stories', require('./routes/stories'))

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}! Betta go catch it!`))

