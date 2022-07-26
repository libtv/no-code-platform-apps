import express from "express";
import jwt from "jsonwebtoken";
import path from "path";
import { UserVO } from "./../../../vo/userVO";
import { SEJONG_API_KEY } from "./../../../const/const";
import { LocalPassPort } from "../../../utils/passport";
import { PrecessCallback } from "../../../utils/process";
import { ValidatorParameter } from "../../../utils/validator";
import { SUCCESS } from "./../../../utils/errorcode";

export const method_post = {
    params: {
        essentialBody: ["user_id", "user_pw"],
        essentialHeader: [],
        minmax: undefined,
        essentialQuery: [],
    } as ValidatorParameter,

    path: path.basename(__filename),

    authenticate: () => {
        return (req: express.Request, res: express.Response, callback: PrecessCallback) => {
            LocalPassPort.authenticate("local", (err, user) => {
                if (err) {
                    return callback({ data: undefined, code: err });
                }

                const userInfo: UserVO = {
                    user_id: user.getDataValue("user_id"),
                    user_pw: user.getDataValue("user_pw"),
                    user_name: user.getDataValue("user_name"),
                    user_email: user.getDataValue("user_email"),
                    user_regdate: user.getDataValue("user_regdate"),
                };

                const accessToken = jwt.sign(userInfo, SEJONG_API_KEY, {
                    expiresIn: "1d",
                    issuer: "localhost",
                    subject: "userInfo",
                });

                res.cookie("accessToken", accessToken);
                callback();
            }).call(null, req, res);
        };
    },

    supplyment: () => {
        return (req: express.Request, res: express.Response, callback: PrecessCallback) => {
            callback(null, { data: undefined, code: SUCCESS });
        };
    },
};
