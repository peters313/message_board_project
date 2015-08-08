var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/secretpage', function(req, res, next){
    var secretfile = req.params[0] || 'views/secretindex.html';
    res.sendFile(path.join(__dirname, "../public", secretfile));
});

router.get('/*', function(req, res, next){
    var file = req.params[0] || 'views/index.html';
    res.sendFile(path.join(__dirname, "../public", file));
});



module.exports = router;