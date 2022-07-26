import express from "express";
import path from "path";
import { Board } from "../../../models/model.board";
import { DB_DELETE_ERROR, DB_INSERT_ERROR, NOT_AUTH_USER, STATUS_LOGOUT, SUCCESS } from "../../../utils/errorcode";
import { logger } from "../../../utils/logger";
import { JwtPassPort } from "../../../utils/passport";
import { PrecessCallback } from "../../../utils/process";
import { getLocalValue, setLocalValue } from "../../../utils/responser";
import { ValidatorParameter } from "../../../utils/validator";
import { UserVO } from "../../../vo/userVO";

export const method_patch = {
    params: {
        essentialBody: ["board_no", "board_title", "board_content"],
        essentialHeader: ["Authorization"],
        minmax: undefined,
        essentialQuery: [],
    } as ValidatorParameter,

    path: path.basename(__filename),

    authenticate: () => {
        return (req: express.Request, res: express.Response, callback: PrecessCallback) => {
            JwtPassPort.authenticate("jwt", (err, user: UserVO | boolean) => {
                if (err || user === false) {
                    return callback({ data: undefined, code: STATUS_LOGOUT }, null);
                } else {
                    setLocalValue("user", user, res);
                    return callback();
                }
            })(req, res);
        };
    },

    supplyment: () => {
        return async (req: express.Request, res: express.Response, callback: PrecessCallback) => {
            const user: UserVO = getLocalValue("user", res);
            const reqBody = req.body;
            const board_no = reqBody.board_no;
            const board_title = reqBody.board_title;
            const board_content = reqBody.board_content;

            try {
                let del_board = await Board.findOne({ where: { board_no: board_no } });
                let del_board_user_id = del_board?.getDataValue("user_id");

                if (user.user_id === del_board_user_id) {
                    let result = await del_board?.update({ board_title: board_title, board_content: board_content });
                    logger.info(`[${method_patch.path}] - board delete success`);

                    callback(null, { data: result, code: SUCCESS });
                } else {
                    callback({ data: undefined, code: NOT_AUTH_USER }, null);
                }
            } catch (err) {
                logger.error(`[${method_patch.path}] - board insert error : + ${err}`);
                callback({ data: undefined, code: DB_DELETE_ERROR }, null);
            }
        };
    },
};
