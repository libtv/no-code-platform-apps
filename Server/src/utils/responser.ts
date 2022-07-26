import express from "express";
import { ApiMethodVO, Result } from "./../vo/apiVO";
import { getResult, SUCCESS } from "./errorcode";

export const CREATE_RESPONSE_OBJ = (data: any, code: string, res: express.Response): void => {
    let params: Result = { data: data, result: getResult(code) };
    res.locals.params = params;
    return;
};

export const RESPONSE_SEND = (req: express.Request, res: express.Response) => {
    let result: Result = res.locals.params;
    let statusCode = result.result.resultCode === SUCCESS ? 200 : 400;
    return res.status(statusCode).json({
        ...result,
    });
};
