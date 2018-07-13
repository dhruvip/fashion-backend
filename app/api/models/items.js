 var mongoose     = require('mongoose');
 var Schema = mongoose.Schema;

 var items   = new Schema({
   itemName: { type: String, required: true },
   itemId: { type: String, required: true },
   productId : { type: String, required: true, ref: 'Products'},
   brandId : { type: String, required: true, ref: 'Brands'},
   itemModel : { type: String, required: true },
   itemRetailCost: { type: Number, required: true },
 });
 
 module.exports = mongoose.model('Items', items);
