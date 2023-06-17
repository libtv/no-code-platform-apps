import express from "express";
import path from "path";
import { SUCCESS } from "../../../utils/errorcode";
import { PrecessCallback } from "../../../utils/process";
import { ValidatorParameter } from "../../../utils/validator";
import { application } from "../../../models/model.application";

export const method_get = {
  params: {
    essentialBody: [],
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
      application
        .findAll({})
        .then((result) => {
          callback(null, {
            data: result.map((v) => {
              return v.dataValues;
            }),
            code: SUCCESS,
          });
        })
        .catch((e) => {
          callback(e);
        });
    };
  },
};
