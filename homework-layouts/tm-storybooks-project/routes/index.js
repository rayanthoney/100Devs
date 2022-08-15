const express = require('express')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')

//  @desc   LOGIN/LANDING PAGE
// @ROUTE   GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login',
    })
})

//  @desc   DASHBOARD
// @ROUTE   GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
    console.log(req.user)
    res.render('dashboard', {
        name: req.user.firstName,
        // stories,
    })
})

module.exports = router 