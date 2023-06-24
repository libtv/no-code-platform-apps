import axios from "axios";

export const method_get = {
  interface: (api_uri: any, axios_data: any) => {
    return (data: any, cb: any) => {
      /* 뭔가 인증 처리 */
      axios({ url: api_uri, method: "get" })
        .then((v) => {
          data.data = v.data.data;
          cb();
        })
        .catch((e) => {
          console.log(e);
          cb(e);
        });
    };
  },

  apply: (callback: any) => {
    return async (data: any, cb: any) => {
      let mydata = data.data;
      cb(null, () => {
        callback(mydata);
      });
    };
  },
};
