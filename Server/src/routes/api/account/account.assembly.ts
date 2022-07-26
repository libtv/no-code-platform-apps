import { FILE_SEPARATOR } from "../../../const/const";
import { ApiMethodVO } from "../../../vo/apiVO";
import { Router } from "express";
import { ProcessAPI } from "../../../utils/process";
import { expressValidator } from "../../../utils/validator";
import { method_post } from "./account.post";
import { method_del } from "./account.del";

const app = Router();
const post = method_post;
const del = method_del;
const api: ApiMethodVO = {
    post: (req, res, next) => {
        const apiCreator = new ProcessAPI(req, res);
        apiCreator.add(expressValidator(post.params));
        apiCreator.add(post.authenticate());
        apiCreator.add(post.supplyment());
        apiCreator.run();
    },
    del: (req, res, next) => {
        const apiCreator = new ProcessAPI(req, res);
        apiCreator.add(expressValidator(del.params));
        apiCreator.add(del.authenticate());
        apiCreator.add(del.supplyment());
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
