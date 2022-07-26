import { UserVO } from "./../vo/userVO";
import { SEJONG_API_KEY } from "./../const/const";
import { Users } from "./../models/model.user";
import passport from "passport";
import localPassport from "passport-local";
import jwtPassport from "passport-jwt";
import { SHA256Encrypt } from "./encrypt";
import { NOT_EXIST_MEMBER, STATUS_LOGOUT } from "./errorcode";
import { getDateTime } from "./date";

const LocalStrategy = localPassport.Strategy;
const JwtStrategy = jwtPassport.Strategy;
const ExtractJwt = jwtPassport.ExtractJwt;

const LocalPassPort = passport.use(
    new LocalStrategy(
        {
            usernameField: "user_id",
            passwordField: "user_pw",
        },
        async (username, password, done) => {
            password = SHA256Encrypt(password);
            const user = await Users.findOne({ where: { user_id: username } });

            if (user) {
                const user_pw = user.getDataValue("user_pw");
                if (user_pw === password) {
                    return done(null, user);
                }
            }

            return done(NOT_EXIST_MEMBER);
        }
    )
);

const JwtPassPort = passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromHeader("authorization"),
            secretOrKey: SEJONG_API_KEY,
        },
        (payload, done) => {
            const user: UserVO = payload;

            if (user) {
                const lat = Number(user.iat);
                const exp = Number(user.exp);
                const time = getDateTime(10); // set time size in paramter

                if (time >= lat && time <= exp) {
                    return done(null, user);
                } else {
                    return done(STATUS_LOGOUT, false);
                }
            } else {
                return done(STATUS_LOGOUT, false);
            }
        }
    )
);

export { LocalPassPort, JwtPassPort };
