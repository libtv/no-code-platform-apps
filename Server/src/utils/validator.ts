import express from "express";
import { NOT_ALLOW_LENGTH, NOT_EXIST_PARAMETER } from "./errorcode";
import { PrecessCallback } from "./process";

interface MinMaxChecker {
    field: string;
    min: number;
    max: undefined | number;
}

export interface ValidatorParameter {
    essential: string[] | undefined;
    minmax: MinMaxChecker[] | undefined;
}

export const expressValidator = ({ essential, minmax }: ValidatorParameter) => {
    return function (req: express.Request, res: express.Response, callback: PrecessCallback) {
        const reqBody = req.body;

        // 필수 파라미터 존재 여부 확인
        if (typeof essential !== "undefined" && essential.length > 0) {
            let result = essential.every((val) => {
                const reqParam = reqBody[val];
                return typeof reqParam !== "undefined";
            });

            if (result === false) {
                return callback({ data: null, code: NOT_EXIST_PARAMETER }, null);
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
                return callback({ data: null, code: NOT_ALLOW_LENGTH }, null);
            }
        }

        return callback();
    };
};
