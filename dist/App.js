"use strict";
exports.__esModule = true;
var express = require("express");
var dotenv = require("dotenv");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var AppRouter_1 = require("./Routes/AppRouter");
var App = /** @class */ (function () {
    function App() {
        dotenv.config();
        //init app
        this.app = express();
        //launch config function
        this.config();
        //setup database connection
        this.mongoSetup();
        //set routing
        this.handleRouting();
    }
    App.prototype.config = function () {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false })); //init session storage
        this.app.set('trust proxy', 1);
        this.app.set('Cache-Control', 'no-cache');
        //set session
        /* this.app.use(ExpressSession({
            "secret":process.env.SECRET ,
            "resave":true,
            "saveUninitialized": false
        })) */
    };
    App.prototype.mongoSetup = function () {
        mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
        mongoose.set('useFindAndModify', false);
    };
    App.prototype.handleRouting = function () {
        this.app.use(AppRouter_1["default"]);
    };
    return App;
}());
exports["default"] = new App().app;
