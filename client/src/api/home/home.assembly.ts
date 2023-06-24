import { ApiMethodVO } from "../../vo/apiVO";
import { asnycProcess } from "../../utils/asyncProcess";
import { method_post } from "./home.post";
import { SERVER_URL } from "../../const/common";
import { method_get } from "./home.get";

const api_uri = `${SERVER_URL}/application`;

export const api: ApiMethodVO = {
  del(callback, axios_data) {},

  get(callback, axios_data) {
    asnycProcess.gc();
    asnycProcess.add(method_get.interface(api_uri, axios_data));
    asnycProcess.add(method_get.apply(callback));
    asnycProcess.run();
  },

  post(callback, axios_data) {
    asnycProcess.gc();
    asnycProcess.add(method_post.interface(api_uri, axios_data));
    asnycProcess.add(method_post.apply(callback));
    asnycProcess.run();
  },

  patch(callback, axios_data) {},
};
