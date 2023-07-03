import express from "express";
import path from "path";
import { SUCCESS } from "../../../utils/errorcode";
import { PrecessCallback } from "../../../utils/process";
import { ValidatorParameter } from "../../../utils/validator";

export const method_patch = {
  params: {
    essentialBody: [],
    essentialHeader: [],
    minmax: undefined,
    essentialQuery: [],
  } as ValidatorParameter,

  path: path.basename(__filename),

  authenticate: () => {
    return (req: express.Request, res: express.Response, callback: PrecessCallback) => {
      return callback();
    };
  },

  supplyment: () => {
    return async (req: express.Request, res: express.Response, callback: PrecessCallback) => {
      callback(null, { data: null, code: SUCCESS });
    };
  },
};
