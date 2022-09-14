const express = require('express')
const router = express.Router()
const indexController = require ('../controllers/index')

// Middleware
// const { ensureAuth, ensureGuest } = require('../middleware/auth')

// Add Controllers
router.get('/', indexController.getHome)
router.post('/q', indexController.getSearch)




module.exports = router;