import express from "express";
const app = express();

const port = 8080;
app.listen(port, function(){
    console.log(`Start Sever on ${port}!`)
});