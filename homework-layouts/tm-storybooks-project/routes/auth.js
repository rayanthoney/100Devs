const express = require('express')
const passport = require('passport')
const router = express.Router()

//  @desc   AUTH WITH GOOGLE
// @ROUTE   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//  @desc   GOOGLE AUTH CALLBACK
// @ROUTE   GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}), (req,res) => {
    res.redirect('/dashboard')
})

// @desc    LOGOUT USER
// @route  /auth/logout
// !Chnage: PASSPORT 0.6 REQUIRES LOGOUT TO BE ASYNC
router.get('/logout', (req,res,next) => {
    req.logout(function(err) {
        if (err) {return next(err)}
        res.redirect('/')
    })
})

module.exports = router 