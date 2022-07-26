import express from "express";
import { NOT_ALLOW_LENGTH, NOT_EXIST_PARAMETER } from "./errorcode";
import { PrecessCallback } from "./process";

interface MinMaxChecker {
    field: string;
    min: number;
    max: undefined | number;
}

export interface ValidatorParameter {
    essentialHeader: string[] | undefined;
    essentialBody: string[] | undefined;
    minmax: MinMaxChecker[] | undefined;
}

export const expressValidator = ({ essentialBody, essentialHeader, minmax }: ValidatorParameter) => {
    return function (req: express.Request, res: express.Response, callback: PrecessCallback) {
        const reqBody = req.body;
        const reqHeader = req.headers;

        // 필수 파라미터 존재 여부 확인
        if (typeof essentialBody !== "undefined" && essentialBody.length > 0) {
            let result = essentialBody.every((val) => {
                const reqParam = reqBody[val.toLowerCase()];
                return typeof reqParam !== "undefined";
            });

            if (result === false) {
                return callback({ data: undefined, code: NOT_EXIST_PARAMETER }, null);
            }
        }

        // 필수 파라미터 존재 여부 확인
        if (typeof essentialHeader !== "undefined" && essentialHeader.length > 0) {
            let result = essentialHeader.every((val) => {
                const reqParam = reqHeader[val.toLowerCase()];
                return typeof reqParam !== "undefined";
            });

            if (result === false) {
                return callback({ data: undefined, code: NOT_EXIST_PARAMETER }, null);
            }
        }

        // 사이즈체크 여부 확인
        if (typeof minmax !== "undefined" && minmax.length > 0) {
            let result = minmax.every((val) => {
                const reqParam = reqBody[val.field];
                if (typeof reqParam === "undefined") return false;

                const valueLength = val.field.length;
                if (valueLength >= val.min && (typeof val.max === "undefined" || valueLength <= val.max)) {
                    return true;
                } else {
                    return false;
                }
            });

            if (result === false) {
                return callback({ data: undefined, code: NOT_ALLOW_LENGTH }, null);
            }
        }

        return callback();
    };
};
