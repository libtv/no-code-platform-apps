import oracledb from "oracledb";
import dotenv from 'dotenv';

dotenv.config({
    path : "../.env"
});

export default oracledb.getConnection({
    user          : process.env.ORACLE_USER,
    password      : process.env.ORACLE_PASSWORD,
    connectString : process.env.ORACLE_HOST + "/" + process.env.ORACLE_DATABASE
}, function (err, conn) {
    if(err){
        console.log('접속 실패', err);
        return;
    }
    console.log('접속 성공');
    conn.execute("select * from users", {}, (err, res) => {console.log(res)});
});