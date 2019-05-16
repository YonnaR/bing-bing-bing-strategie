"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
//get mongoose schema
var Schema = mongoose.Schema;
//create User data schema
exports.CommandeSchema = new Schema({
    "client": {
        type: String,
        required: 'Need a Client Name'
    },
    "actif": {
        type: Boolean,
        "default": false
    },
    "visible": {
        type: Boolean,
        "default": true
    },
    "poste": {
        type: Number
    },
    "commande": {
        type: String,
        required: 'Need a product reference'
    },
    "type": {
        type: String,
        required: 'Need a product type'
    },
    "produit": {
        type: String,
        required: 'Need a product reference'
    },
    "unite": {
        type: Number,
        required: 'Need a number a product'
    },
    "visuel": {
        type: Number,
        required: 'Need a number of visuels'
    },
    "date_crea": {
        type: String
    },
    "date_debut": {
        type: String
    },
    "date_fin": {
        type: String
    },
    "created": {
        type: Date,
        "default": Date.now()
    }
});
