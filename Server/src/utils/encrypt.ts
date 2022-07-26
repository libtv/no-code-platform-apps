import { SEJONG_API_KEY } from "./../const/const";
import crypto from "crypto-js";

export function SHA256Encrypt(planText: string, key: string = SEJONG_API_KEY) {
    let md5 = crypto.MD5(planText).toString();
    return crypto.HmacSHA256(md5, key).toString();
}
