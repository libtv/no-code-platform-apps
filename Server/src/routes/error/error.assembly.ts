import express from "express";
import { NOT_KNOWN_ERROR } from "../../utils/errorcode";
import { CREATE_RESPONSE_OBJ, RESPONSE_SEND } from "./../../utils/responser";

export default function apiRouter(req: express.Request, res: express.Response) {
    CREATE_RESPONSE_OBJ(undefined, NOT_KNOWN_ERROR, res);
    RESPONSE_SEND(req, res);
}
