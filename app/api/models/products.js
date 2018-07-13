 var mongoose     = require('mongoose');
 var Schema = mongoose.Schema;

 var products   = new Schema({
   productName : { type: String, required: true },
   productId : { type: String, required: true },
 });
 
 module.exports = mongoose.model('Products', products);
