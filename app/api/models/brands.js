 var mongoose     = require('mongoose');
 var Schema = mongoose.Schema;

 var brands   = new Schema({
   brandName : { type: String, required: true },
   brandId : { type: String, required: true },
   gender: { type: String, required: true }
 });
 
 module.exports = mongoose.model('Brands', brands);
