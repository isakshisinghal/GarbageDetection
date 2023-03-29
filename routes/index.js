const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()

actions.use(bodyParser.urlencoded({ extended: false }))
actions.use(bodyParser.json())
 
// Set EJS as templating engine
app.set("view engine", "ejs");

var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });

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

router.post('/newGarbage',upload.single(trash),actions.newGarbage)

module.exports = router