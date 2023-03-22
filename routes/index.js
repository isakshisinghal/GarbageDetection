const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()

const multer = require('multer')
router.use(express.static(__dirname+"./methods/"))
const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
    
});

var upload = multer({
    storage:Storage
}).single('trash');

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

router.post('/newGarbage',upload,actions.newGarbage)

module.exports = router