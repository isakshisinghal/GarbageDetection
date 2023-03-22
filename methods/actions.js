var User = require('../models/user')
var mapSchema = require('../models/mapSchema')
var changePassSchema = require('../models/changePassSchema')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')
var fs = require('fs');
// const multer = require('multer')

// const Storage = multer.diskStorage({
//     destination:"uploads",
//     filename:(req, file, cb) =>{
//         cb(null, file.originalname);
//     },
// });

// const upload = multer({
//     storage:Storage
// }).single('trash')


var functions = {
    signUp: function (req, res) {
        if ((!req.body.name) || (!req.body.email) || (!req.body.role) || (!req.body.password)) {
            res.json({success: false, msg: 'Enter all fields'}) 
        }
        else {
            var newUser = User({
                name: req.body.name,
                email: req.body.email,
                role: req.body.role,
                password: req.body.password
            });
            console.log(newUser)
            newUser.save(function (err, newUser) {
                if (err) {
                    console.log(err)
                    res.json({success: false, msg: err.toString()})
                }
                else {
                    res.json({success: true, msg: 'Successfully saved'})
                }
            })
        }
    },


    newGarbage: function(req,res,next){
       
            // upload(req,res,(err)=>{
            //     if(err){
            //         console.log(err)
            //     }
            //     else{
                    const mapsch = new mapSchema({
                        name: req.body.name,
                        location: req.body.location,
                        timestamp: req.body.timestamp,
                        image:{
                            data: req.file.filename,
                            contentType: 'image/png'
                        }
                      })
                      mapsch.save()
                      .then(()=>res.send("Saved Successfully"))
                      .catch((err)=>console.log(err))
                // }
        
    },

    authenticate: function (req, res) {
        User.findOne({
            email: req.body.email
        }, function (err, user) {
            if (err) {
                res.json({success: false, msg: err})
            }
                if (!user) {
                    res.status(403).send({success: false, msg: 'Authentication Failed, No such user exists!'})
                }

                else {
                    user.comparePassword(req.body.password, (err, isMatch) => {
                            if (isMatch && !err) {
                                var token = jwt.encode(user, config.secret)
                                res.json({ success: true, token: token })
                            }
                            else {
                                return res.status(403).send({ success: false, msg: 'Authentication failed, Incorrect password!' })
                            }
                        })
                }
        }
        )
    },
    getinfo: function (req, res) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            var token = req.headers.authorization.split(' ')[1]
            var decodedtoken = jwt.decode(token, config.secret)
            return res.json({success: true, msg: 'Hello ' + decodedtoken.name})
        }
        else {
            return res.json({success: false, msg: 'No Headers'})
        }
    },

    changePass: function(req, res){
        User.findOne({
            email: req.body.email
        }, function (err, user) {
            var oldPass = User({
                password: req.body.password
            })
            const newPass = new changePassSchema({
                newPassword: req.body.newPassword,
                confirmPassword: req.body.confirmPassword
            })

                user.comparePassword(oldPass, (err, isMatch) => {
                            if (isMatch && !err) {
                                var token = jwt.encode(user, config.secret)
                                res.json({ success: true, token: token })

                                if(newPassword === confirmPassword){
                                    
                                }
                            }
                            else {
                                return res.status(403).send({ success: false, msg: 'Incorrect password entered!' })
                            }
                        })
                }
        
        )

    }
    
}

module.exports = functions