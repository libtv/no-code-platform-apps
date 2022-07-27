import express from "express";
import path from "path";
import { Comment } from "../../../models/model.comment";
import { NOT_MATCH_COMMENT, SUCCESS } from "../../../utils/errorcode";
import { logger } from "../../../utils/logger";
import { JwtPassPort } from "../../../utils/passport";
import { PrecessCallback } from "../../../utils/process";
import { ValidatorParameter } from "../../../utils/validator";
import { CommentVO } from "../../../vo/commentVO";
import { Users } from "./../../../models/model.user";
import { DB_INSERT_ERROR, DB_SELECT_ERROR, NOT_AUTH_USER, STATUS_LOGOUT } from "./../../../utils/errorcode";
import { getLocalValue, setLocalValue } from "./../../../utils/responser";
import { UserVO } from "./../../../vo/userVO";

export const method_post = {
    params: {
        essentialBody: ["comment_parent", "comment_content", "board_no"],
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

    parentCommentVerification: () => {
        return async (req: express.Request, res: express.Response, callback: PrecessCallback) => {
            const reqBody = req.body;
            const comment_parent = reqBody.comment_parent;

            if (comment_parent === null) {
                return callback();
            }

            try {
                let result = await Comment.findOne({ where: { comment_no: comment_parent } });

                if (result) {
                    return callback();
                } else {
                    return callback({ data: undefined, code: NOT_MATCH_COMMENT }, null);
                }
            } catch (err) {
                logger.error(`[${method_post.path}] - comment select error : + ${err}`);
                return callback({ data: undefined, code: DB_SELECT_ERROR }, null);
            }
        };
    },

    supplyment: () => {
        return async (req: express.Request, res: express.Response, callback: PrecessCallback) => {
            const user: UserVO = getLocalValue("user", res);
            const reqBody = req.body;

            const data: CommentVO = {
                comment_parent: reqBody.comment_parent,
                comment_content: reqBody.comment_content,
                board_no: reqBody.board_no,
                user_id: user.user_id,
                comment_regdate: new Date(),
            };

            try {
                let result = await Comment.create({
                    ...data,
                });

                logger.info(`[${method_post.path}] - comment insert success`);
                callback(null, { data: result, code: SUCCESS });
            } catch (err) {
                logger.error(`[${method_post.path}] - comment insert error : + ${err}`);
                callback({ data: data, code: DB_INSERT_ERROR }, null);
            }
        };
    },
};
