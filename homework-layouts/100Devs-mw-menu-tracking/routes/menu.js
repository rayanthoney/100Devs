const express = require('express')
const router = express.Router()

// Middleware
// const { ensureAuth, ensureGuest } = require('../middleware/auth')

// Add Controllers
router.get('/', indexController.getHome)




module.exports = router