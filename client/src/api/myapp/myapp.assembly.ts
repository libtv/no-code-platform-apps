import { ApiMethodVO } from "../../vo/apiVO";
import { asnycProcess } from "../../utils/asyncProcess";
import { method_post } from "./myapp.post";
import { SERVER_URL } from "../../const/common";

const api_uri = `${SERVER_URL}/myapp`;

export const myapp_api: ApiMethodVO = {
  del(callback, axios_data) {
    asnycProcess.gc();
    asnycProcess.run();
  },

  get(callback, axios_data) {},

  post(callback, axios_data) {
    asnycProcess.gc();
    asnycProcess.add(method_post.interface(api_uri, axios_data));
    asnycProcess.add(method_post.apply(callback));
    asnycProcess.run();
  },

  patch(callback, axios_data) {},
};
