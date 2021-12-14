const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser")

// mongoose.connect('mongodb://localhost:27017/hamburger',{useNewUrlParser:true,useUnifiedTopology:true});

var contactSchema = new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    text:String
});

var Contact = mongoose.model('Contact',contactSchema);


module.exports = Contact