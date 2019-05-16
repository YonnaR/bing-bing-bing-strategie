"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var crypto = require("crypto");
var UserModel_1 = require("../Models/UserModel");
var password_hash_1 = require("password-hash");
var User = mongoose.model('user', UserModel_1.UserSchema);
exports["default"] = new /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.addNewUser = function (req, res) {
        var newUser = new User(req.body);
        newUser.save(function (err, user) {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    };
    UserController.prototype.getUsers = function (req, res) {
        User.find({}, function (err, user) {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    };
    UserController.prototype.getUserWithID = function (req, res) {
        User.findById(req.params.userId, function (err, user) {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    };
    UserController.prototype.updateUser = function (req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { "new": true }, function (err, user) {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    };
    UserController.prototype.deleteUser = function (req, res) {
        User.remove({ _id: req.params.userId }, function (err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!' });
        });
    };
    UserController.prototype.getAuth = function (req, res) {
        if (req.query.email != "" && req.query.password != "") {
            User.findOne({ email: req.query.email }).exec(function (err, user) {
                if (err) {
                    res.send(err);
                }
                if (password_hash_1.verify(req.query.password, user.password)) {
                    var token = crypto.randomBytes(64).toString('hex');
                    console.log(token);
                    req.session['token'] = token;
                    res.send(token);
                }
                else {
                    req.session['auth'] = "false";
                    res.redirect('/login?auth=fail');
                }
            });
        }
        else {
            req.session['auth'] = "false";
            res.redirect('/login?auth=fail');
        }
    };
    return UserController;
}());
