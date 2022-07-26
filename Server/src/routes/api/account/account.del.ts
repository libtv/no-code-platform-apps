import express from "express";
import path from "path";
import { Users } from "../../../models/model.user";
import { DB_DELETE_ERROR, NOT_MATCH_USERID, STATUS_LOGOUT, SUCCESS } from "../../../utils/errorcode";
import { logger } from "../../../utils/logger";
import { JwtPassPort } from "../../../utils/passport";
import { PrecessCallback } from "../../../utils/process";
import { setLocalValue } from "../../../utils/responser";
import { ValidatorParameter } from "../../../utils/validator";
import { UserVO } from "../../../vo/userVO";
import { Board } from "./../../../models/model.board";
import { getLocalValue } from "./../../../utils/responser";

export const method_del = {
    params: {
        essentialBody: ["user_id"],
        essentialHeader: [],
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
            const reqBody = req.body;
            const user_id = reqBody.user_id;
            const user: UserVO = getLocalValue("user", res);

            if (user.user_id !== user_id) return callback({ data: undefined, code: NOT_MATCH_USERID }, null);

            try {
                let result = await Board.destroy({ where: { user_id: user_id } });

                if (result) {
                    logger.info(`[${method_del.path}] - deleted the board related to the user ID`);
                    let result2 = await Users.destroy({ where: { user_id: user_id } });

                    if (result2) {
                        logger.info(`[${method_del.path}] - deleted user ID`);
                        return callback({ data: { account: result, board: result2 }, code: SUCCESS }, null);
                    } else {
                        logger.info(`[${method_del.path}] - didnt delete user ID`);
                        return callback({ data: { account: result, board: result2 }, code: DB_DELETE_ERROR }, null);
                    }
                } else {
                    logger.error(`[${method_del.path}] - account create error `);
                    callback({ data: undefined, code: DB_DELETE_ERROR }, null);
                }
            } catch (err) {
                logger.error(`[${method_del.path}] - account create error : ${err}`);
                callback({ data: undefined, code: DB_DELETE_ERROR }, null);
            }
        };
    },
};
