import express from "express";
import path from "path";
import { Comment } from "../../../models/model.comment";
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
        essentialQuery: ["board_no"],
    } as ValidatorParameter,

    path: path.basename(__filename),

    authenticate: () => {
        return (req: express.Request, res: express.Response, callback: PrecessCallback) => {
            callback();
        };
    },

    supplyment: () => {
        return async (req: express.Request, res: express.Response, callback: PrecessCallback) => {
            const reqQuery = req.query;
            const board_no = reqQuery.board_no;

            try {
                const data = await Comment.findAll({ where: { board_no: board_no } });
                const result: BoardVO[] = data.map((val) => {
                    return val.get();
                });

                logger.info(`[${method_get.path}] comment select success`);
                callback(null, { data: result, code: SUCCESS });
            } catch (err) {
                logger.error(`[${method_get.path}] comment select error : + ${err}`);
                callback({ data: undefined, code: DB_SELECT_ERROR }, null);
            }
        };
    },
};
