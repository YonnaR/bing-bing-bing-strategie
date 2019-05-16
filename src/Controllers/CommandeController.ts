import { CommandeSchema } from './../Models/CommandeModel';
import * as Mongoose from 'mongoose';
import { Request, Response } from 'express';


const Commande = Mongoose.model('commande', CommandeSchema);
 

export default new class CommandeController{

    public GetToday(req: Request, res: Response){
        let utc :string = new Date().toJSON().slice(0,10).replace(/-/g,'/').split('/').reverse().join('/')
        Commande.find({"date_debut":utc, "visible":true}, (err, c) => {
            if(err){
                res.send(err);
            }
            res.json(c);
        }).sort('created')
    };

    public GetActif(req: Request, res: Response){
        Commande.find({"actif":true,"visible":true}, (err, c) => {
            if(err){
                res.send(err);
            }
            res.json(c);
        }).sort('-1');
    };

    public GetLast(req: Request, res: Response){
        Commande.find({"visible":true,"actif":false}).sort("-created").limit(parseInt(req.params.limit)).exec((err, c) => {
            if(err){
                res.send(err);
            }
            res.json(c)
        })
    }

    public GetAll(req: Request, res: Response){
        Commande.find({}, (err, c) => {
            if(err){
                res.send(err);
            }
            res.json(c)
        })
        .sort('-1')
    }

    public GetById(req: Request, res: Response){
        Commande.find({"_id":req.params.id}, (err, c) => {
            if(err){
                res.send(err);
            }
            res.json(c)
        })
    }

    public GetByPoste(req: Request, res: Response){
        Commande.find({"poste":req.params.id , "visible":true}, (err, c) => {
            if(err){
                res.send(err);
            }
            res.json(c)
        })
    }

    public Update(req: Request, res: Response){
        Commande.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public Delete(req: Request, res: Response){
        Commande.deleteOne({ _id: req.params.id }, (err) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted commande!'});
        });
    }

    public Add(req: Request, res: Response){
        let utc :string = new Date().toJSON().slice(0,10).replace(/-/g,'/').split('/').reverse().join('/')
        let data :{
            date_crea:string
        } = req.body
        data.date_crea = utc;
        let newCommande = new Commande(req.body);
        newCommande.save((err, c) => {
            if(err){
                res.send(err);
            }    
            res.json(c);
        });
    }
}