import axios from "axios";

export const method_post = {
  interface: (api_uri: any, axios_data: any) => {
    return (data: any, cb: any) => {
      /* 뭔가 인증 처리 */
      axios({ url: api_uri, method: "post", data: axios_data })
        .then((v) => {
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
      cb(null, () => {
        alert("테이블이 생성되었습니다. ");
        callback();
      });
    };
  },
};
