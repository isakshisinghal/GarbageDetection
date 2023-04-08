const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()


router.get('/', actions.fetchData)

// //@desc Adding new user
// //@route POST /adduser
router.post('/adduser', actions.signUp)

// Authenticate a user
router.post('/authenticate', actions.authenticate)

// //@desc Get info on a user
// //@route GET /getinfo
router.get('/getinfo', actions.getinfo)

router.post('/changepassword', actions.changePass)

router.post('/newGarbage',actions.newGarbage)

router.delete('/deleteGarbage',actions.deleteGarbage)

module.exports = router