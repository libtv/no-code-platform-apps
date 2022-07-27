import { FILE_SEPARATOR } from "../../../const/const";
import { ApiMethodVO } from "../../../vo/apiVO";
import { Router } from "express";
import { ProcessAPI } from "../../../utils/process";
import { expressValidator } from "../../../utils/validator";
import { method_get } from "./comment.get";
import { method_post } from "./comment.post";
import { method_del } from "./comment.del";
import { method_patch } from "./comment.patch";

const app = Router();
const get = method_get;
const post = method_post;
const del = method_del;
const patch = method_patch;

const api: ApiMethodVO = {
    get: (req, res, next) => {
        const apiCreator = new ProcessAPI(req, res);
        apiCreator.add(expressValidator(get.params));
        apiCreator.add(get.authenticate());
        apiCreator.add(get.supplyment());
        apiCreator.run();
    },

    post: (req, res, next) => {
        const apiCreator = new ProcessAPI(req, res);
        apiCreator.add(expressValidator(post.params));
        apiCreator.add(post.authenticate());
        apiCreator.add(post.verification());
        apiCreator.add(post.parentCommentVerification());
        apiCreator.add(post.supplyment());
        apiCreator.run();
    },

    del: (req, res, next) => {
        const apiCreator = new ProcessAPI(req, res);
        apiCreator.add(expressValidator(del.params));
        apiCreator.add(del.authenticate());
        apiCreator.add(del.verification());
        apiCreator.add(del.supplyment());
        apiCreator.run();
    },

    patch: (req, res, next) => {
        const apiCreator = new ProcessAPI(req, res);
        apiCreator.add(expressValidator(patch.params));
        apiCreator.add(patch.authenticate());
        apiCreator.add(patch.verification());
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
