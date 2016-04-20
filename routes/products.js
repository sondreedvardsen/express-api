// Dependencies
var express = require('express');
var router = express.Router({mergeParams: true});
var connection = require('../connection');

router.get('/:productId?', function(req, res){
    productId = req.params.productId;
    table = req.params.host + '_products';
    if (productId) {
        connection.acquire(function(err, con) {
            con.query('select * from ?? where products_id = ?', [table, productId], function(err, rows) {
                con.release();
                res.json(rows);
            });
        });
    }
    else {
        connection.acquire(function(err, con) {
            con.query('select * from ??', [table], function(err, rows) {
                con.release();
                res.json(rows);
            });
        });
    }
});

// Return router
module.exports = router;
