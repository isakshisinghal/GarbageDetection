const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()


router.get('/', actions.fetchData)

router.post('/signUp', actions.signUp)

router.post('/signIn', actions.authenticate)

router.post('/newGarbage',actions.newGarbage)

router.delete('/deleteGarbage',actions.deleteGarbage)

router.post('/changePassword',actions.changePassword)



module.exports = router