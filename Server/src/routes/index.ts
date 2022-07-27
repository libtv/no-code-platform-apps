import { FILE_SEPARATOR, IMPORT_API_EXTENSION } from "./../const/const";
import express from "express";
import { getDirectory, importDirectory } from "../utils/path";
import errorRouter from "./error/error.assembly";
import { logger } from "../utils/logger";
import path from "path";

const jsName = path.basename(__filename);

async function setApi(app: express.Router) {
    const apiDirectory = getDirectory("routes/api");
    await Promise.all(
        apiDirectory.map(async ({ dir, api }, idx) => {
            let router = await importDirectory(dir + FILE_SEPARATOR + api + "." + IMPORT_API_EXTENSION);
            app.use(router.default("api", api));
            logger.info(`[${jsName}] - api/${api} 의 라우터가 추가되었습니다.`);
        })
    );
}

async function setError(app: express.Router) {
    app.use(errorRouter);
    logger.info(`[${jsName}] - 에러 라우터가 추가되었습니다.`);
}

export async function setRoutes(app: express.Router) {
    await setApi(app);
    await setError(app);
}
