const express = require('express')
const passport = require('passport')
const router = express.Router()
//const { ensureAuth, ensureGuest } = require('../middleware/auth')

//const Story = require('../models/Story')

// @desc   Auth with Google
// @route   GET / auth / google
router.get('/google',passport.authenticate('google',{scope: ['profile']}))

//@desc google auth callback
//@route get /auth/google/callback
router.get('/google/callback',passport.authenticate('google',{failureRedirect: '/'},
(req,res)=>{
    res.redirect('/dashboard')
}
))


module.exports = router
