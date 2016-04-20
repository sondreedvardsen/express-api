// Dependencies
var express = require('express');
var bodyparser = require('body-parser');
var jwt = require('jsonwebtoken');
//var swaggerTools = require('swagger-tools');
var connection = require('./connection');

// Express
var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

// Routes
app.use('/api/:host', require('./routes/api'));

connection.init();


// Start server
var server = app.listen(3000, function() {
    console.log('Server listening on port ' + server.address().port);
});
