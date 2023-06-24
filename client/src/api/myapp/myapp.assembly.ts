import { ApiMethodVO } from "../../vo/apiVO";
import { asnycProcess } from "../../utils/asyncProcess";

const api: ApiMethodVO = {
  del(callback, axios_data) {
    asnycProcess.gc();
    asnycProcess.run();
  },

  get(callback, axios_data) {},

  post(callback, axios_data) {},

  patch(callback, axios_data) {},
};
