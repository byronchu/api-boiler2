const express = require('express');
var Jobtype = require('../models/Jobtypes');

const router = express.Router();

// Index: read all
router.get('/', function(req, res, next) {
    Jobtype.find()
        .then(jobtypes => {
            res.json(jobtypes);
        });
});

// Show: read specific
router.get('/:id', function(req, res, next) {
    const { id } = req.params;
    Jobtype.findById(id)
        .then(user => {
            res.json(user);
        }).catch( err => {
          res.send(err.message)
        });

});

// Create: create single
router.post('/', function(req, res) {
    var newJobtype = new Jobtype();

    console.log(req.body)

    newJobtype.name = req.body.name;


    console.log(newJobtype.toJSON())

    // save the jobs and check for errors
    newJobtype.save()
      .then(newJobResponse => {
        res.json({ message: 'Jobtype created!', newJobtype: newJobtypeResponse });
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
      Job.findByIdAndUpdate(id,{ $set: changes},{ new: true })
          .then((result)=> {
            res.json({message:"Job type updated"})
              // console.log(result);
          })
          .catch(error => {
            res.send(error);
          });
   });



// Delete: delete single
router.delete('/:id', function(req, res, next) {
    const { id } = req.params;
    Jobtype.findByIdAndRemove(id)
        .then(job => {
            res.json(job);
        });
});

module.exports = router;
