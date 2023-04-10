var User = require('../models/user')
var mapSchema = require('../models/mapSchema')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

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
            newUser.save()
            res.send("Saved Successfully!")
        }
    },

    newGarbage: function(req,res){
       
        if ((!req.body.name) || (!req.body.location) || (!req.body.pictureUploaded)) {
            res.json({success: false, msg: 'Enter all fields'}) 
        }
        else{
            const mapsch = new mapSchema({
                name: req.body.name,
                location: req.body.location,
                timestamp: req.body.timestamp,
                pictureUploaded: req.body.pictureUploaded
              });
              res.send(mapsch);
              mapsch.save();
        } 
    },

    deleteGarbage : function(req,res){
        mapSchema.findOne({
            timestamp: req.body.timestamp
        }, function (err, garbage) {
            if (err) {
                res.json({success: false, msg: err})
            }
                if (!garbage) {
                    res.status(403).send({success: false, msg: 'No such data exists!'})
                }

                else {
                    var myquery = { timestamp: req.body.timestamp };
                    mapSchema.deleteOne(myquery, function(err, obj) {
                        if (err) throw err;
                        console.log("1 document deleted");
                        // res.json({success: true, msg: 'Deleted Successfully'}) 
                        return res.redirect("/");
                      });
                }
        }
        )
    },


    authenticate: function (req, res) {
        User.findOne({
            name: req.body.name
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
                                return res.redirect("/");
                            }
                            else {
                                return res.status(403).send({ success: false, msg: 'Authentication failed, Incorrect password!' })
                            }
                        })
                }
        }
        )
    },
    
    fetchData:  async function(req, res)  { 
        let entries =  await mapSchema.find({});
        console.log(entries)
        res.send({entries})
    },

    changePassword : async(req, res)=> {
        try {
            oldPassword = req.body.oldPassword;
        newPassword = req.body.newPassword;
        
        let user = await User.findOne({email : req.body.email,password : oldPassword});
        if (!user) {
            return res.send({
              error: true,
              message: "Password reset token is invalid or has expired.",
            });
          }
        user.password = newPassword;
        await user.save();
        return res.send({
            success: true,
            message: "Password has been changed",
          });
        }
        catch (error) {
            console.error("reset-password-error", error);
            return res.status(500).json({
            error: true,
            message: error.message,
        })}
    } 
    
}

module.exports = functions