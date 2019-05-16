import * as express from "express";
import * as dotenv from "dotenv"
import * as ExpressSession from "express-session";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as mongoose from "mongoose";
import * as path from "path";

import AppRouter from "./Routes/AppRouter"
import { Logger } from "mongodb";
import { log } from "util";

class App {

    //public declarations
    public app: express.Application;


    constructor() {
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

    private config(): void{

        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));//init session storage
        this.app.set('trust proxy', 1); 
        this.app.set('Cache-Control','no-cache')
        //set session
        /* this.app.use(ExpressSession({
            "secret":process.env.SECRET ,
            "resave":true,
            "saveUninitialized": false
        })) */
    }

    private mongoSetup(): void{
        mongoose.connect(process.env.DB_URL,{useNewUrlParser:true}); 
        mongoose.set('useFindAndModify', false); 
    }

    private handleRouting ():void{
        this.app.use(AppRouter)
    }
}

export interface Request extends Express.Request {
    session: [any];
}

export default new App().app;