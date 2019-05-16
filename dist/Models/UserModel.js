"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
//get mongoose schema
var Schema = mongoose.Schema;
//create User data schema
exports.UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a first name'
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    created_date: {
        type: Date,
        "default": Date.now
    }
});
