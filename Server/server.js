import express from 'express';
import homeRouter from "./src/routes/home.js";
import dotenv from 'dotenv'
import { expressLimit } from 'express-access-limit';
import cors from 'cors';
import helmet from 'helmet';

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

app.use(helmet());
app.use(limiter.checkLimitHandler);
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.listen(process.env.PORT, function(){
    console.log(`Start Sever on ${process.env.PORT}!`)
});

app.use("/", homeRouter);