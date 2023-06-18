import axios from "axios";
import { asnycProcess } from "../../utils/asyncProcess";
import { ApiMethodVO } from "../../vo/apiVO";
import { SERVER_URL } from "../../const/common";

const api_uri = `${SERVER_URL}/application`;

export const myapp_api: ApiMethodVO = {
  post: (callback: any, axios_data) => {
    asnycProcess.gc();
    asnycProcess.add((data: any, cb: any) => {
      axios({ url: api_uri, method: "post", data: axios_data })
        .then((v) => {
          cb();
        })
        .catch((e) => {
          console.log(e);
          cb(e);
        });
    });
    asnycProcess.add((data: any, cb: any) => {
      cb(null, () => {
        alert("어플이 생성되었습니다. ");
        callback();
      });
    });
    asnycProcess.run();
  },
  get: (callback: any, axios_data: any) => {
    axios({ url: api_uri }).then((v) => {
      return callback(v.data.data);
    });
  },
};
