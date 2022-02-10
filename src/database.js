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
});

// conn.execute("select * from member", {}, {outFormat:oracledb.OBJECT}, function (err, result) {  
//     // Json 형태로 넘어오도록 설정
// if(err) throw err; 

// console.log('query read success');

// dataStr = JSON.stringify(result);
// console.log(dataStr);

// arrStr = JSON.stringify(result.rows);
// var arr = JSON.parse(arrStr);
// console.log(arr);

// console.log(arr[0].ID + " " + arr[0].PASSWORD);

// });