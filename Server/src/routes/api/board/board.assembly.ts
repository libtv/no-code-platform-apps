import { FILE_SEPARATOR } from "./../../../const/const";
import { ApiMethodVO } from "./../../../vo/apiVO";
import { Router } from "express";
import { ProcessAPI } from "../../../utils/process";
import { expressValidator } from "../../../utils/validator";
import { method_post } from "./board.post";
import { method_get } from "./board.get";
import { method_del } from "./board.del";
import { method_patch } from "./board.patch";

const app = Router();

const post = method_post;
const get = method_get;
const del = method_del;
const patch = method_patch;

const api: ApiMethodVO = {
    post: (req, res, next) => {
        const apiCreator = new ProcessAPI(req, res);
        apiCreator.add(expressValidator(post.params));
        apiCreator.add(post.authenticate());
        apiCreator.add(post.supplyment());
        apiCreator.run();
    },

    get: (req, res, next) => {
        const apiCreator = new ProcessAPI(req, res);
        apiCreator.add(expressValidator(get.params));
        apiCreator.add(get.authenticate());
        apiCreator.add(get.supplyment());
        apiCreator.run();
    },

    del: (req, res, next) => {
        const apiCreator = new ProcessAPI(req, res);
        apiCreator.add(expressValidator(del.params));
        apiCreator.add(del.authenticate());
        apiCreator.add(del.supplyment());
        apiCreator.run();
    },

    patch: (req, res, next) => {
        const apiCreator = new ProcessAPI(req, res);
        apiCreator.add(expressValidator(patch.params));
        apiCreator.add(patch.authenticate());
        apiCreator.add(patch.supplyment());
        apiCreator.run();
    },
};

export default function apiRouter(prefix: string, url: string) {
    const urls = FILE_SEPARATOR + prefix + FILE_SEPARATOR + url;
    if (api.get) app.get(urls, api.get);
    if (api.post) app.post(urls, api.post);
    if (api.del) app.delete(urls, api.del);
    if (api.patch) app.patch(urls, api.patch);

    return app;
}
