const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()
const path = require('path')
const multer = require('multer')
router.use(express.static(__dirname+"./methods/"))
const Storage = multer.diskStorage({
    destination: "./methods/uploads",
    filename : (request, file, cb) =>{
        cb(null, file.fieldname+"_"+Date.now()+path.extname(file.or));
      },
    
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