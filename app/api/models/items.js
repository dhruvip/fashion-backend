 var mongoose     = require('mongoose');
 var Schema = mongoose.Schema;

 var items   = new Schema({
   itemType: { type: String, required: true },
   itemCode: { type: String, required: true },
   itemCost: { type: Number, required: true },
 });
 
 module.exports = mongoose.model('Items', items);
