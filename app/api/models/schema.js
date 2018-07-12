//~ var mongoose     = require('mongoose');
//~ var Schema = mongoose.Schema;
//~ var GiftRecordSchema   = new Schema({
  //~ _id: { type: String, required: true, unique: true },
  //~ loggedUser: { type: String, required: true },
  //~ dateofRecord: { type: Date, default: Date.now },
  //~ businessUnit: { type: String, required: true, default: '' },
  //~ dateofGift: { type: Date, required: true, default: '' },
  //~ giftDirection: { type: String, required: true, default: '' },
  //~ whoRecieved: { type: String,  required: true, default: '' },
  //~ receiverEmail: { type: String,  required: true, default: '' },
  //~ accountNumber: { type: String, required: true, default: '' },
  //~ value: { type: String, required: true, default: '' },
  //~ currencyType: { type: String, required: true, default: '' },
  //~ description: { type: String,required: true, default: '' },
  //~ approver: { type: String, required: true, default: '' },
  //~ approvalStatus: { type: String, default: 'PENDING' },
  //~ fileName: { type: String, default: '' },
  //~ typeOfGift: { type: String, default: '',required: true }
//~ });
//~ 
//~ module.exports = mongoose.model('Record', GiftRecordSchema);
