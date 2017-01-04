
const mongoose = require('mongoose');
const db = require('./init');

const citySchema = new mongoose.Schema({
   name: {type:String , unique: true} // reference to cities collection

});

const City = mongoose.model('City', citySchema);

module.exports = City;
