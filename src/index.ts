import "reflect-metadata";
import {createConnection} from "typeorm";
import {Request, Response} from "express";
import * as express from "express";
import * as bodyParser from "body-parser";

//controller
import * as HomeController from "./controller/Home";


// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async connection => {    

    console.log("Express application is up and running on port 5000");

}).catch(error => console.log("TypeORM connection error: ", error));

// create express app
const app = express();
app.use(bodyParser.json());

//status routes with type variable to valiate data type between CallHistory (1), CallRecording (2), Transcriptions (3)
app.post("/status/:type", HomeController.saveStatus);
app.get("/get/:type", HomeController.getAllByType);

// run app
app.listen(5000);