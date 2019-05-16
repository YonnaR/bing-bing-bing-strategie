import * as express from "express";
import CommandeController from "../Controllers/CommandeController";


var AppRouter :express.Router = express.Router();

AppRouter.use(express.static('client/build' , {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['html', 'css', 'js','png','jpg','ico','txt'],
    maxAge: '1d',
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', String(Date.now()))
    }
}));

AppRouter.post("/", CommandeController.Add);
AppRouter.get("/all", CommandeController.GetAll);
AppRouter.get("/actif", CommandeController.GetActif);
AppRouter.get("/today", CommandeController.GetToday);
AppRouter.get("/last/:limit", CommandeController.GetLast);
AppRouter.get("/poste/:id", CommandeController.GetByPoste);
AppRouter.put("/:id", CommandeController.Update);
AppRouter.delete("/:id", CommandeController.Delete);
AppRouter.get("/:id", CommandeController.GetById);








export default AppRouter