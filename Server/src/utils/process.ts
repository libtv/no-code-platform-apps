import { CREATE_RESPONSE_OBJ, RESPONSE_SEND } from "./responser";
import express from "express";
import async from "async";

interface ProcessResource {
    data: any;
    code: string;
}

export interface PrecessCallback {
    (error?: ProcessResource | null, resource?: ProcessResource | null): void;
}

interface Process {
    (req: express.Request, res: express.Response, callback: PrecessCallback): void;
}

export class ProcessAPI {
    private funcs: Function[];
    private req: express.Request;
    private res: express.Response;

    constructor(req: express.Request, res: express.Response) {
        this.funcs = [];
        this.req = req;
        this.res = res;
    }

    add(func: Process) {
        this.funcs.push((callback) => {
            func(this.req, this.res, callback);
        });
    }

    run() {
        let self = this;
        async.waterfall(this.funcs, function (err, res) {
            if (err) {
                CREATE_RESPONSE_OBJ(err.data, err.code, self.res);
                return RESPONSE_SEND(self.req, self.res);
            }

            CREATE_RESPONSE_OBJ(res.data, res.code, self.res);
            return RESPONSE_SEND(self.req, self.res);
        });
    }
}
