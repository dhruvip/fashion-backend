 var mongoose     = require('mongoose');
 var config = require('./../../../config');
 var Schema = mongoose.Schema;

 var brands   = new Schema({
   brandCategory: { type: String, required: true, enum: config.categories , default: config.categories[0]}, //enum from ['Watches']
   brandName : { type: String, required: true },
   brandId : { type: String, required: true },
   gender: { type: String, required: true, enum: ['MALE','FEMALE','UNISEX'], default: 'UNISEX'} // M: male; F: female; U: unisex
 });
 
 module.exports = mongoose.model('Brands', brands);
