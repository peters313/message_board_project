var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    // key : models type
    name : String,
    message : String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("message", MessageSchema);