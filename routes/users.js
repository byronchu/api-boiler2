const express = require('express');
var User = require('../models/Users');

const router = express.Router();

// Index: read all
router.get('/', function(req, res, next) {
    User.find()
        .then(users => {
            res.json(users);
        });
});

// Show: read specific
router.get('/:id', function(req, res, next) {
    const { id } = req.params;
    User.findById(id)
        .then(user => {
            res.json(user);
        }).catch( err => {
          res.send(err.message)
        });

});

// Create: create single
router.post('/', function(req, res) {
    var newUser = new User();

    newUser.email = req.body.email;  // set the user email (comes from the request)
    newUser.password = req.body.password;
            // save the user and check for errors
            newUser.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'User created!'});

            });
 });

// Update: update single
router.patch('/:id', function(req, res, next) {
    const { id } = req.params;
    let { change } = req.body;
    change = parseInt(change, 10)
    // Change is 1 or -1
    Counter.findByIdAndUpdate(id, {
        $inc: { count: change }
    }, { new: true })
        .then(counter => {
            res.json(counter);
        });
});

// Delete: delete single
router.delete('/:id', function(req, res, next) {
    const { id } = req.params;
    User.findByIdAndRemove(id)
        .then(user => {
            res.json(user);
        });
});

module.exports = router;
