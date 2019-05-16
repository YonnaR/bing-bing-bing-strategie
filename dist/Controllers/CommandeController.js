"use strict";
exports.__esModule = true;
var CommandeModel_1 = require("./../Models/CommandeModel");
var Mongoose = require("mongoose");
var Commande = Mongoose.model('commande', CommandeModel_1.CommandeSchema);
exports["default"] = new /** @class */ (function () {
    function CommandeController() {
    }
    CommandeController.prototype.GetToday = function (req, res) {
        var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/').split('/').reverse().join('/');
        Commande.find({ "date_debut": utc, "visible": true }, function (err, c) {
            if (err) {
                res.send(err);
            }
            res.json(c);
        }).sort('created');
    };
    ;
    CommandeController.prototype.GetActif = function (req, res) {
        Commande.find({ "actif": true, "visible": true }, function (err, c) {
            if (err) {
                res.send(err);
            }
            res.json(c);
        }).sort('-1');
    };
    ;
    CommandeController.prototype.GetLast = function (req, res) {
        Commande.find({ "visible": true, "actif": false }).sort("-created").limit(parseInt(req.params.limit)).exec(function (err, c) {
            if (err) {
                res.send(err);
            }
            res.json(c);
        });
    };
    CommandeController.prototype.GetAll = function (req, res) {
        Commande.find({}, function (err, c) {
            if (err) {
                res.send(err);
            }
            res.json(c);
        })
            .sort('-1');
    };
    CommandeController.prototype.GetById = function (req, res) {
        Commande.find({ "_id": req.params.id }, function (err, c) {
            if (err) {
                res.send(err);
            }
            res.json(c);
        });
    };
    CommandeController.prototype.GetByPoste = function (req, res) {
        Commande.find({ "poste": req.params.id, "visible": true }, function (err, c) {
            if (err) {
                res.send(err);
            }
            res.json(c);
        });
    };
    CommandeController.prototype.Update = function (req, res) {
        Commande.findOneAndUpdate({ _id: req.params.id }, req.body, { "new": true }, function (err, user) {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    };
    CommandeController.prototype.Delete = function (req, res) {
        Commande.deleteOne({ _id: req.params.id }, function (err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted commande!' });
        });
    };
    CommandeController.prototype.Add = function (req, res) {
        var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/').split('/').reverse().join('/');
        var data = req.body;
        data.date_crea = utc;
        var newCommande = new Commande(req.body);
        newCommande.save(function (err, c) {
            if (err) {
                res.send(err);
            }
            res.json(c);
        });
    };
    return CommandeController;
}());
