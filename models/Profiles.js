
const mongoose = require('mongoose');
const db = require('./init');

const profileSchema = new mongoose.Schema({

   firstName: {type:String, required: true }, //{ type:mongoose.Schema.Types.ObjectId,  ref:'User' },  // user who created≈
   lastName: {type:String, required: true },
   address:{type:String, required: true },
   telephone: {type:String, required: true },


   city: String ,  // reference to cities collection
   sector: String, // reference sector collection
   jobtype: String,// reference jobtype collection
   salary: String, // reference salary collection
   jobAlert: {type:Boolean,default:false}

});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
