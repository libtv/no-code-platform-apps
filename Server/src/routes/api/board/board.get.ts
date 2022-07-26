import express from "express";
import path from "path";
import { Board } from "../../../models/model.board";
import { DB_SELECT_ERROR, SUCCESS } from "../../../utils/errorcode";
import { logger } from "../../../utils/logger";
import { PrecessCallback } from "../../../utils/process";
import { ValidatorParameter } from "../../../utils/validator";
import { BoardVO } from "../../../vo/boardVO";

export const method_get = {
    params: {
        essentialBody: [],
        essentialHeader: [],
        minmax: undefined,
        essentialQuery: [],
    } as ValidatorParameter,

    path: path.basename(__filename),

    authenticate: () => {
        return (req: express.Request, res: express.Response, callback: PrecessCallback) => {
            callback();
        };
    },

    supplyment: () => {
        return async (req: express.Request, res: express.Response, callback: PrecessCallback) => {
            try {
                let data = await Board.findAll();

                let result: BoardVO[] = data.map((val) => {
                    return val.get();
                });

                logger.info(`[${method_get.path}] board select success`);
                callback(null, { data: result, code: SUCCESS });
            } catch (err) {
                logger.error(`[${method_get.path}] board select error : + ${err}`);
                callback({ data: undefined, code: DB_SELECT_ERROR }, null);
            }
        };
    },
};
