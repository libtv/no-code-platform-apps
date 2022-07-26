import express from "express";
import { ApiMethodVO, Result } from "./../vo/apiVO";
import { getResult, SUCCESS } from "./errorcode";

export const sender = (data: any, code: string, res: express.Response) => {
    let params: Result = { data: data, result: getResult(code) };
    let otherParams = res.locals.params;

    let statusCode = params.result.resultCode === SUCCESS ? 200 : 400;
    return res.status(statusCode).json({
        ...params,
        ...otherParams,
    });
};

export const setLocalValue = (key: string, val: any, res: express.Response) => {
    res.locals[key] = val;
};

export const getLocalValue = (key: string, res: express.Response) => {
    return res.locals[key];
};
