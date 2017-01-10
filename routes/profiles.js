const express = require('express');
var Profile = require('../models/Profiles');

const router = express.Router();

// Index: read all
router.get('/', function(req, res, next) {
    Profile.find()
        .then(jobs => {
            res.json(profiles);
        });
});

// Show: read specific
router.get('/:id', function(req, res, next) {
    const { id } = req.params;
    Profile.findById(id)
        .then(user => {
            res.json(user);
        }).catch( err => {
          res.send(err.message)
        });

});

// Create: create single
router.post('/', function(req, res) {
    var newProfile = new Profile();

    console.log(req.body)

    newProfile.firstName = req.body.firstName;
    newProfile.lastName = req.body.lastName;
    newProfile.address = req.body.address;
    newProfile.telephone = req.body.telephone;
    newProfile.city = req.body.city;
    newProfile.sector = req.body.sector;
    newProfile.jobtype = req.body.jobtype;

    newProfile.salary = req.body.salary;
    newProfile.jobAlert = req.body.jobAlert;

    console.log(newProfile.toJSON())

    // save the jobs and check for errors
    newProfile.save()
      .then(newProfileResponse => {
        res.json({ message: 'Profile created!', newProfile: newProfileResponse });
      })
      .catch(error => {
        res.send(error);
      });
 });

// Update: update single

  router.patch('/:id', function(req, res) {
      var changes  = req.body;
      var { id } = req.params;

      console.log('sent changes:',changes);
      console.log('id:',id);
      Profile.findByIdAndUpdate(id,{ $set: changes},{ new: true })
          .then((result)=> {
            res.json({message:"Profile updated"})
              // console.log(result);
          })
          .catch(error => {
            res.send(error);
          });
   });



// Delete: delete single
router.delete('/:id', function(req, res, next) {
    const { id } = req.params;
    Profile.findByIdAndRemove(id)
        .then(job => {
            res.json(job);
        });
});

module.exports = router;
