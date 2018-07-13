 var mongoose     = require('mongoose');
 var Schema = mongoose.Schema;

 var inventory   = new Schema({
   itemID : {type: String, required: true, ref: Items },
   itemInStock : {type: Number, required: true },
   itemInRent : {type: Number, required: true },
 });
 
 module.exports = mongoose.model('Inventory', inventory);
