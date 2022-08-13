const express = require('express')
const router = express.Router()

//  @desc   LOGIN/LANDING PAGE
// @ROUTE   GET /
router.get('/', (req, res) => {
    res.render('login', {
        layout: 'login',
    })
})

//  @desc   DASHBOARD
// @ROUTE   GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router 