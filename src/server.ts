import express, { Request, Response } from "express";
import cors from "cors";
import messageRouter from './route/message.route';


const app = express();
app.use(cors());
app.use(express.json());
app.use(messageRouter);


app.listen(3001, () => console.log("listening on port 3001"));