 var mongoose     = require('mongoose');
 var Schema = mongoose.Schema;

 var users   = new Schema({
   userFullName : { type: String, required: true },
   userEmail : { type: String, required: true },
   userPhone  : {type: Number, required: true },
   userDOB : {type: Date, required: true },
 });
 
 module.exports = mongoose.model('Users', users);
