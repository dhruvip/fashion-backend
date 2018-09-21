 var mongoose     = require('mongoose');
 var Schema = mongoose.Schema;

 var products   = new Schema({
   productName : { type: String, required: true },
   modelNumber : { type: String, required: true },
   productId : { type: String, required: true },
   gender: { type: String, required: true },
   brandId: { type: String, required: true },
   pageLink: {type: String}
 });
 
 module.exports = mongoose.model('Products', products);
