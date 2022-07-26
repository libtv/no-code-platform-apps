import cors from "cors";
import helmet from "helmet";

import express from "express";

export function setMiddleWare(app: express.Express) {
    app.use(helmet());
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
}
