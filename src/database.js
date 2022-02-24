import oracledb from "oracledb";
import dotenv from 'dotenv';
import { query, response } from "express";

dotenv.config({
    path : "../.env"
});

// 내부적으로 Async/Await, Promises, Callback을 지원
export default oracledb.getConnection({
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
    let query = "INSERT INTO posts (TITLE, CONTENT, WRITER, TIME) VALUES (?, ?, ?, '', now())";
    let values = [req.body.title,
                req.body.content,
                req.body.writer]

    conn.execute(query, values, function(err, res) {
        if (err) {
            console.error(err.message);

            doRelease(conn);
            return;
        }

        console.log(res.rows);

        doRelease(conn, res.rows);
    });
});

// DB 연결해제
function doRelease(conn, res){
    conn.close(function(err){
        if (err){
            console.error(err.message);
        }

        // DB종료까지 모두 완료되었을 시 최종적으로 응답 데이터 반환
        response.send(res);
    });
};