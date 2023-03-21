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
   pictureUploaded:{
       data:Buffer,
    //    require:true,
       contentType:String,
    //    max:1000
   }
})
module.exports = mongoose.model('mapSchema', mapSchema)