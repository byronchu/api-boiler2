
const mongoose = require('mongoose');
const db = require('./init');

const profileSchema = new mongoose.Schema({

   firstName: {type:String, required: false}, //{ type:mongoose.Schema.Types.ObjectId,  ref:'User' },  // user who created≈
   lastName: {type:String, required: false },
   address:{type:String, required: false },
   phone: {type:String, required: false },


   city: String ,  // reference to cities collection
   sector: String, // reference sector collection
   jobtype: String,// reference jobtype collection
   salary: String, // reference salary collection
   jobAlert: {type:Boolean,default:false}

});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
