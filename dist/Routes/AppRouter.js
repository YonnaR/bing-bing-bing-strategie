"use strict";
exports.__esModule = true;
var express = require("express");
var CommandeController_1 = require("../Controllers/CommandeController");
var AppRouter = express.Router();
AppRouter.use(express.static('client/build', {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['html', 'css', 'js', 'png', 'jpg', 'ico', 'txt'],
    maxAge: '1d',
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', String(Date.now()));
    }
}));
AppRouter.post("/", CommandeController_1["default"].Add);
AppRouter.get("/all", CommandeController_1["default"].GetAll);
AppRouter.get("/actif", CommandeController_1["default"].GetActif);
AppRouter.get("/today", CommandeController_1["default"].GetToday);
AppRouter.get("/last/:limit", CommandeController_1["default"].GetLast);
AppRouter.get("/poste/:id", CommandeController_1["default"].GetByPoste);
AppRouter.put("/:id", CommandeController_1["default"].Update);
AppRouter["delete"]("/:id", CommandeController_1["default"].Delete);
AppRouter.get("/:id", CommandeController_1["default"].GetById);
exports["default"] = AppRouter;
