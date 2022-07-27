import { ResponseVO } from "../vo/responseVO";

/** 200 : 성공 코드 */
export const SUCCESS = "200";

/** 300 : 사용자 에러 코드 */
export const NOT_EXIST_PARAMETER = "301";
export const NOT_ALLOW_LENGTH = "302";
export const NOT_EXIST_MEMBER = "303";
export const STATUS_LOGOUT = "304";
export const NOT_AUTH_USER = "305";
export const NOT_MATCH_USERID = "306";
export const NOT_MATCH_COMMENT = "307";

/** 400 : 데이터베이스 에러 코드 */
export const DB_INSERT_ERROR = "401";
export const DB_SELECT_ERROR = "402";
export const DB_DELETE_ERROR = "403";
export const DB_UPDATE_ERROR = "404";

/** 900 : 알려지지 않은 에러코드 */
export const NOT_KNOWN_ERROR = "999";

const ERRORCODE = new Map<string, ResponseVO>();
ERRORCODE.set(SUCCESS, { resultCode: SUCCESS, resultMessage: "성공" });
ERRORCODE.set(NOT_EXIST_PARAMETER, { resultCode: NOT_EXIST_PARAMETER, resultMessage: "필수 파라미터가 존재하지 않습니다." });
ERRORCODE.set(NOT_ALLOW_LENGTH, { resultCode: NOT_ALLOW_LENGTH, resultMessage: "파라미터 값의 최소값 혹은 최대값이 일치하지 않습니다." });
ERRORCODE.set(NOT_EXIST_MEMBER, { resultCode: NOT_EXIST_MEMBER, resultMessage: "회원정보가 일치하지 않습니다." });
ERRORCODE.set(STATUS_LOGOUT, { resultCode: STATUS_LOGOUT, resultMessage: "현재 로그아웃 상태입니다." });
ERRORCODE.set(NOT_AUTH_USER, { resultCode: NOT_AUTH_USER, resultMessage: "권한이 존재하지 않습니다." });
ERRORCODE.set(NOT_MATCH_USERID, { resultCode: NOT_MATCH_USERID, resultMessage: "유저아이디가 일치하지 않습니다." });
ERRORCODE.set(NOT_MATCH_COMMENT, { resultCode: NOT_MATCH_COMMENT, resultMessage: "COMMENT가 일치하지 않습니다." });

ERRORCODE.set(DB_INSERT_ERROR, { resultCode: DB_INSERT_ERROR, resultMessage: "데이터베이스에 INSERT 도중 에러가 발생하였습니다." });
ERRORCODE.set(DB_SELECT_ERROR, { resultCode: DB_SELECT_ERROR, resultMessage: "데이터베이스에 SELECT 도중 에러가 발생하였습니다." });
ERRORCODE.set(DB_DELETE_ERROR, { resultCode: DB_DELETE_ERROR, resultMessage: "데이터베이스에 DELETE 도중 에러가 발생하였습니다." });
ERRORCODE.set(DB_UPDATE_ERROR, { resultCode: DB_UPDATE_ERROR, resultMessage: "데이터베이스에 UPDATE 도중 에러가 발생하였습니다." });

ERRORCODE.set(NOT_KNOWN_ERROR, { resultCode: NOT_KNOWN_ERROR, resultMessage: "알 수 없는 오류가 발생하였습니다." });

export function getResult(code: string): ResponseVO {
    const result = ERRORCODE.get(code);

    if (typeof result !== "undefined") {
        return result;
    } else {
        return { resultCode: NOT_KNOWN_ERROR, resultMessage: "알 수 없는 오류가 발생하였습니다." };
    }
}
