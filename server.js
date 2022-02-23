import express from 'express';
import homeRouter from "./routes/home.js";
import dotenv from 'dotenv'
import { expressLimit } from 'express-access-limit';

dotenv.config();

const app = express();

const limiter = expressLimit.expressLimit({
    maxPerMinute: 30,
    resetTime: 60,
    errorCodeNumber: 404,
    type: "default", // 레디스를 사용하고자 하면 redis 를 넣어줍니다.
    handler: (req, res, next) => {
        res.json({ errorHandler: "this page is exceed request page" });
    },
});
limiter.setAccessStore();

app.use(limiter.checkLimitHandler);
app.use(express.static('public'));
app.listen(process.env.PORT, function(){
    console.log(`Start Sever on ${process.env.PORT}!`)
});

app.use("/", homeRouter);