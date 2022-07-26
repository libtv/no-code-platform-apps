import express from "express";
import paths from "path";

import { APP_PORT } from "./const/const";
import { setMiddleWare } from "./middlewares/middleware.index";
import { setRoutes } from "./routes";
import { logger } from "./utils/logger";

const app = express();
const path = paths.basename(__filename);

setMiddleWare(app);
setRoutes(app);

app.listen(APP_PORT, function () {
    logger.info(`[${path}] - Start Sever on ${APP_PORT}!`);
});
