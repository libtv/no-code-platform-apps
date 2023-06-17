export interface ApiMethodVO {
  get?: (callback?: any, data?: any) => any;
  post?: (callback?: any, data?: any) => any;
  del?: (callback?: any, data?: any) => any;
  patch?: (callback?: any, data?: any) => any;
}
