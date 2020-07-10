const express = require('express')
const router = express.Router()
//const { ensureAuth, ensureGuest } = require('../middleware/auth')

//const Story = require('../models/Story')

// @desc    Login/Landing page
// @route   GET /
router.get('/', (req, res) => {
  res.render('login',{
    layout:'login',
  })
})

//@desc Dashboard
//@route get /dashboard
router.get('/dashboard',(req,res)=>{
    res.render('dashboard')
})

module.exports = router
