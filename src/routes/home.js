import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dao from "../daos/listDao.js";
import oracledb from "oracledb";
import dotenv from 'dotenv';

dotenv.config({
    path : "../../.env"
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const router = express.Router();

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.post('/upload', function(req, res){
    oracledb.getConnection({
        user          : process.env.ORACLE_USER,
        password      : process.env.ORACLE_PASSWORD,
        connectString : process.env.ORACLE_HOST + "/" + process.env.ORACLE_DATABASE
    }, function (err, conn) {
        if (err) {
            console.log('접속 실패', err);
            return;
        }
        console.log('접속 성공');
        // conn.execute("select * from users", {}, (err, res) => {console.log(res)});
        let query = "INSERT INTO posts (TITLE, CONTENT, WRITER) VALUES (:1, :2, :3)";
        let values = [req.body.title,
                    req.body.content,
                    req.body.writer]
    
        conn.execute(query, values, function(err, res) {
            if (err) {
                console.error(err.message);
    
                doRelease(conn);
                return;
            }
    
            console.log(res.rowsAffected);
    
            doRelease(conn, res.rowsAffected);
        });
    });
    
    // DB 연결해제
    function doRelease(conn, res){
        conn.close(function(err){
            if (err){
                console.error(err.message);
            }
    
            // DB종료까지 모두 완료되었을 시 최종적으로 응답 데이터 반환
            // res.send(res);
        });
    };
});

export default router;