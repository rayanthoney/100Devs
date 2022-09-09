const express = require('express')
const router = express.Router()
const loginController = require ('../controllers/login')

// Middleware
// const { ensureAuth, ensureGuest } = require('../middleware/auth')

// Add Controllers
router.get('/', loginController.getLogin)
router.get('/new-acct', loginController.getSignup)
router.post('/logout', loginController.getLogout)
router.post('/', loginController.postLogin)
router.post('/new', loginController.postSignup)




module.exports = router