const express = require('express');
var Job = require('../models/Jobs');

const router = express.Router();

// Index: read all
router.get('/', function(req, res, next) {
    Job.find()
        .then(jobs => {
            res.json(jobs);
        });
});

// Show: read specific
router.get('/:id', function(req, res, next) {
    const { id } = req.params;
    Job.findById(id)
        .then(user => {
            res.json(user);
        }).catch( err => {
          res.send(err.message)
        });

});

// Create: create single
router.post('/', function(req, res) {
    var newJob = new Job();

    console.log(req.body)

    //newJob.user = req.body.user;
    newJob.title = req.body.title;
    newJob.headline = req.body.headline;
    newJob.description = req.body.description;
    newJob.expiry = req.body.expiry;
    newJob.keywords = req.body.keywords;
    newJob.city = req.body.city;
    newJob.sector = req.body.sector;
    newJob.jobtype = req.body.jobtype;
    newJob.salary = req.body.salary;
    newJob.active = req.body.active;

    console.log(newJob.toJSON())

    // save the user and check for errors
    newJob.save()
      .then(newJobResponse => {
        res.json({ message: 'Job created!', newJob: newJobResponse });
      })
      .catch(error => {
        res.send(error);
      });
 });

// Update: update single
router.patch('/:id', function(req, res, next) {
    const { id } = req.params;
    let { change } = req.body;
    change = parseInt(change, 10)
    // Change is 1 or -1
    Job.findByIdAndUpdate(id, {
        $inc: { count: change }
    }, { new: true })
        .then(counter => {
            res.json(counter);
        });
});

// Delete: delete single
router.delete('/:id', function(req, res, next) {
    const { id } = req.params;
    Job.findByIdAndRemove(id)
        .then(job => {
            res.json(job);
        });
});

module.exports = router;
