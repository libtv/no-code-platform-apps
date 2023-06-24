export interface ApiMethodVO {
  get: (callback?: any, axios_data?: any) => any;
  post: (callback?: any, axios_data?: any) => any;
  del: (callback?: any, axios_data?: any) => any;
  patch: (callback?: any, axios_data?: any) => any;
}
