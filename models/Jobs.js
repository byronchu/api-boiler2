
const mongoose = require('mongoose');
const db = require('./init');

const jobSchema = new mongoose.Schema({
   user: String, //{ type:mongoose.Schema.Types.ObjectId,  ref:'User' },  // user who created≈
   title: { type: String, required: true, trim: true, minlength:3},
   headline: String,
   description: String,
   expiry: { type: Date, required:false},
   keywords: String,
   city: String ,  // reference to cities collection
   sector: String, // reference sector collection
   jobtype: {type:String, required: false },// reference jobtype collection
   salary: String, // reference salary collection
   active: Boolean,
   created_at: { type: Date, default: Date.now }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
