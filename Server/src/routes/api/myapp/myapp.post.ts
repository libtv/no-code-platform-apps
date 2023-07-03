import { myapp } from "../../../models/model.myapp";
import express from "express";
import path from "path";
import { SUCCESS } from "../../../utils/errorcode";
import { PrecessCallback } from "../../../utils/process";
import { ValidatorParameter } from "../../../utils/validator";

export const method_post = {
  params: {
    essentialBody: ["FORM_NAME", "TABLE_NAME", "FILED_NAME", "KEY_NAME"],
    essentialHeader: [],
    minmax: undefined,
    essentialQuery: [],
  } as ValidatorParameter,

  path: path.basename(__filename),

  authenticate: () => {
    return (req: express.Request, res: express.Response, callback: PrecessCallback) => {
      /* 뭔가 인증 처리 */
      return callback();
    };
  },

  supplyment: () => {
    return async (req: express.Request, res: express.Response, callback: PrecessCallback) => {
      myapp.create(req.body);
      callback(null, { data: null, code: SUCCESS });
    };
  },
};
