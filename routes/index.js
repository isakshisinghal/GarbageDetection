const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()

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


const Storage = multer.diskStorage({
    destination:'uploads',
    filename:(req, file, cb) =>{
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage:Storage
}).single('trash')

router.post('/newGarbage',upload(actions.newGarbage))

module.exports = router