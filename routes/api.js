// Dependencies
var express = require('express');
var router = express.Router({mergeParams: true});

// Routes
router.use('/products', require('./products'));


// Return router
module.exports = router;
