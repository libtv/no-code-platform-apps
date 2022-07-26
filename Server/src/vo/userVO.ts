export interface UserVO {
    user_id: string;
    user_pw: string;
    user_name: string;
    user_email: string;
    user_regdate: Date;
    exp?: string;
    iat?: string;
}
