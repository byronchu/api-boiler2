const express = require('express');
var City = require('../models/Cities');

const router = express.Router();

// Index: read all
router.get('/', function(req, res, next) {
    City.find()
        .then(cities => {
            res.json(cities);
        });
});

// Show: read specific
router.get('/:id', function(req, res, next) {
    const { id } = req.params;
    City.findById(id)
        .then(city => {
            res.json(city);
        }).catch( err => {
          res.send(err.message)
        });

});

// Create: create single
router.post('/', function(req, res) {
    var newCity = new City();

    console.log(req.body)

    newCity.name = req.body.name;



    console.log(newCity.toJSON())

    // save the jobs and check for errors
    newCity.save()
      .then(newJobResponse => {
        res.json({ message: 'Job created!', newCity: newCityResponse });
      })
      .catch(error => {
        res.send(error);
      });
 });

// Update: update single
router.patch('/:id', function(req, res, next) {
    var changes  = req.body;
    var { id } = req.params;
    // const { id } = req.params;
    // let { change } = req.body;
    console.log('sent changes:',changes);
    console.log('id:',id);
    City.findByIdAndUpdate(id,{ $set: changes},{ new: true })
        .then((result)=> {
            console.log(result);
        })
        .catch(error => {
          res.send(error);
        });
 });




// Delete: delete single
router.delete('/:id', function(req, res, next) {
    const { id } = req.params;
    City.findByIdAndRemove(id)
        .then(city => {
            res.json(city);
        });
});

module.exports = router;
