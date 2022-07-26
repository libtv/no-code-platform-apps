import { sender } from "./responser";
import express from "express";
import async from "async";

export interface ProcessResource {
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
                return sender(err.data, err.code, self.res);
            }

            return sender(res.data, res.code, self.res);
        });
    }
}
