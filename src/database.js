import oracledb from "oracledb";

oracledb.getConnection({
    user          : "jihee",
    password      : "64605548",
    connectString : "localhost/XE"
}, function (err, conn) {
    if(err){
        console.log('접속 실패', err);
        return;
    }
    console.log('접속 성공');
    conn.execute("select * from users", {}, (err, res) => {console.log(res)});
});