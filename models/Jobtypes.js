
const mongoose = require('mongoose');
const db = require('./init');

const jobtypeSchema = new mongoose.Schema({
   name: {type:String , unique: true} // reference to jobtype collection

});

const Jobtype = mongoose.model('Jobtype', jobtypeSchema);

module.exports = Jobtype;
