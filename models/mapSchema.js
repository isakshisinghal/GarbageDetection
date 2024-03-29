var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
var mapSchema = new Schema({
   name: {
       type: String,
       require: true
   },
   location: {
       type: String,
       require: true,
       max:1000
   },
   timestamp :{
       type: Date,
       require: false,
       default: Date.now

   },
   image:
    {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('mapSchema', mapSchema)