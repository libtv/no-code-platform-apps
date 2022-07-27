import express from "express";
import path from "path";
import { Users } from "../../../models/model.user";
import { DB_SELECT_ERROR, DB_UPDATE_ERROR, NOT_AUTH_USER, STATUS_LOGOUT, SUCCESS } from "../../../utils/errorcode";
import { logger } from "../../../utils/logger";
import { JwtPassPort } from "../../../utils/passport";
import { PrecessCallback } from "../../../utils/process";
import { getLocalValue, setLocalValue } from "../../../utils/responser";
import { ValidatorParameter } from "../../../utils/validator";
import { UserVO } from "../../../vo/userVO";
import { Comment } from "./../../../models/model.comment";

export const method_patch = {
    params: {
        essentialBody: ["comment_no", "comment_content"],
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

    verification: () => {
        return async (req: express.Request, res: express.Response, callback: PrecessCallback) => {
            const user: UserVO = getLocalValue("user", res);
            try {
                let result = await Users.findOne({ where: { user_id: user.user_id } });

                if (result) {
                    return callback();
                } else {
                    return callback({ data: undefined, code: NOT_AUTH_USER }, null);
                }
            } catch (err) {
                return callback({ data: undefined, code: DB_SELECT_ERROR }, null);
            }
        };
    },

    supplyment: () => {
        return async (req: express.Request, res: express.Response, callback: PrecessCallback) => {
            const user: UserVO = getLocalValue("user", res);
            const reqBody = req.body;
            const comment_no = reqBody.comment_no;
            const comment_content = reqBody.comment_content;

            try {
                let data = await Comment.findOne({ where: { comment_no: comment_no, comment_status: "Y", user_id: user.user_id } });

                if (data === null) {
                    return callback({ data: undefined, code: NOT_AUTH_USER }, null);
                }

                let result = await data.update({ comment_content: comment_content });

                if (result === null) {
                    callback({ data: data, code: DB_UPDATE_ERROR }, null);
                }

                logger.info(`[${method_patch.path}] - board insert success `);
                return callback(null, { data: result, code: SUCCESS });
            } catch (err) {
                logger.error(`[${method_patch.path}] - board insert error : + ${err}`);
                callback({ data: undefined, code: DB_UPDATE_ERROR }, null);
            }
        };
    },
};
