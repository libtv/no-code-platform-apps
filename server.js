import express from "express";
import homeRouter from "./routes/home.js";

const app = express();

const port = 8081;
app.use(express.static('public'));
app.listen(port, function(){
    console.log(`Start Sever on ${port}!`)
});

app.use("/", homeRouter);