import express from "express";
import path from "path";
import { SHA256Encrypt } from "../../../utils/encrypt";
import { DB_INSERT_ERROR, SUCCESS } from "../../../utils/errorcode";
import { logger } from "../../../utils/logger";
import { PrecessCallback } from "../../../utils/process";
import { ValidatorParameter } from "../../../utils/validator";
import { UserVO } from "../../../vo/userVO";
import { Users } from "./../../../models/model.user";

export const method_post = {
    params: {
        essentialBody: ["user_id", "user_pw", "user_name", "user_email"],
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
            const reqBody = req.body;
            const user: UserVO = {
                user_id: reqBody.user_id,
                user_pw: reqBody.user_pw.length === 64 ? reqBody.user_pw : SHA256Encrypt(reqBody.user_pw),
                user_name: reqBody.user_name,
                user_email: reqBody.user_email,
                user_regdate: new Date(),
            };

            try {
                let result = await Users.create({
                    ...user,
                });

                if (result) {
                    logger.info(`[${method_post.path}] - account create success`);
                    callback(null, { data: undefined, code: SUCCESS });
                } else {
                    logger.error(`[${method_post.path}] - account create error `);
                    callback({ data: undefined, code: DB_INSERT_ERROR }, null);
                }
            } catch (err) {
                logger.error(`[${method_post.path}] - account create error : ${err}`);
                callback({ data: undefined, code: DB_INSERT_ERROR }, null);
            }
        };
    },
};
