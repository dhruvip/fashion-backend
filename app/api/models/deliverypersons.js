 var mongoose     = require('mongoose');
 var Schema = mongoose.Schema;
// replicate as user
 var deliveryPerson   = new Schema({
   userFullName : { type: String, required: true },
   userEmail : { type: String, required: true },
   userPhone  : {type: Number, required: true },
   userDOB : {type: Date, required: true },
   userId : { type: String, required: true },
 });
 
 module.exports = mongoose.model('DeliveryPerson', deliveryPerson);
