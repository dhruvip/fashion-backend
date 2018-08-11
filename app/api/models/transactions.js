 var mongoose     = require('mongoose');
 var Schema = mongoose.Schema;

 var transactions   = new Schema({
   transactionId : { type: String, required: true },
   userId : { type: String, required: true, ref: 'Users'},
   itemID : { type: String, required: true, ref: "Items" },
   amountPaid : { type: Number, required: true },
   deliveryAddress : { type: String, required: true },
   deliveryPersonId : { type: String, required: true, ref: "DeliveryPerson" },
   DeliveryDate: { type: Date, required: true },
   returnDate : { type: Date, required: true }
 });
 
 module.exports = mongoose.model('Transactions', transactions);
