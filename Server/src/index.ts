import { APP_PORT } from "./const/const";
import express from "express";
import { setMiddleWare } from "./middlewares/middleware.index";
import { setRoutes } from "./routes";

const app = express();

setMiddleWare(app);
setRoutes(app);

app.listen(APP_PORT, function () {
    console.log(`Start Sever on ${APP_PORT}!`);
});
