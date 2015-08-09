var express = require('express');
var router = express.Router();
var path = require('path');
var Message = require("../models/people");

router.post("/", function(req, res, next){
    console.log("Post Hit: ", req.body);
    Message.create(req.body, function(err, post){
        res.send("Yes");
    });
});

router.delete("/:data", function(req, res, next){
    Message.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err){
            console.log("ERROR!!! : ", err);
        }
        res.json(post);
    });
});

router.get("/", function(req, res, next){
    Message.find(function(err, message){
        res.json(message);
    });
});

module.exports = router;