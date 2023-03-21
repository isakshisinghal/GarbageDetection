const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()
const multer = require('multer')

const Storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, './uploads/');
      },
    
      //add back the extension
      filename: function (request, file, callback) {
        callback(null, file.originalname);
      },
});

const upload = multer({
    storage:Storage
})

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})

// //@desc Adding new user
// //@route POST /adduser
router.post('/adduser', actions.signUp)

// Authenticate a user

router.post('/authenticate', actions.authenticate)

// //@desc Get info on a user
// //@route GET /getinfo
router.get('/getinfo', actions.getinfo)

router.post('/changepassword', actions.changePass)

router.post('/newGarbage',upload.single('trash'),actions.newGarbage)

module.exports = router