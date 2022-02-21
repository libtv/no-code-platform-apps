import express from "express";
import homeRouter from "./routes/home.js";
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.use(express.static('public'));
app.listen(process.env.PORT, function(){
    console.log(`Start Sever on ${process.env.PORT}!`)
});

app.use("/", homeRouter);