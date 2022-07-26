import express from "express";
import { NOT_KNOWN_ERROR } from "../../utils/errorcode";
import { sender } from "./../../utils/responser";

export default function apiRouter(req: express.Request, res: express.Response) {
    return sender(undefined, NOT_KNOWN_ERROR, res);
}
