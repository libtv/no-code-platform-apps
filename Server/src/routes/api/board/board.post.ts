import express from "express";
import path from "path";
import { getLocalValue, setLocalValue } from "./../../../utils/responser";
import { BoardVO } from "./../../../vo/boardVO";
import { Board } from "./../../../models/model.board";
import { DB_INSERT_ERROR, STATUS_LOGOUT } from "./../../../utils/errorcode";
import { UserVO } from "./../../../vo/userVO";
import { JwtPassPort } from "../../../utils/passport";
import { PrecessCallback } from "../../../utils/process";
import { ValidatorParameter } from "../../../utils/validator";
import { SUCCESS } from "../../../utils/errorcode";
import { logger } from "../../../utils/logger";

export const method_post = {
    params: {
        essentialBody: ["board_title", "board_content"],
        essentialHeader: ["Authorization"],
        minmax: undefined,
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

            const data: BoardVO = {
                board_title: reqBody.title,
                board_content: reqBody.content,
                board_regdate: new Date(),
                user_id: user.user_id,
            };

            try {
                let result = await Board.create({
                    ...data,
                });

                logger.info(`[${method_post.path}] - board insert success`);
                callback(null, { data: result, code: SUCCESS });
            } catch (err) {
                logger.error(`[${method_post.path}] - board insert error : + ${err}`);
                callback({ data: data, code: DB_INSERT_ERROR }, null);
            }
        };
    },
};
