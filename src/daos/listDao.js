import db from '../database.js';

const myQuery = await db();

let list = (req, res) => {
    myQuery("SELECT * FROM posts", (err, row) => {
        if(err) throw err;
        res.send({success:true, data:row})
    })
}

let add = (req, res) => {
    let body = req.body;
    let sql = "INSERT INTO posts (TITLE, CONTENT, WRITER, TIME) VALUES (:1, :2, :3, sysdate)";
    myQuery.execute(sql,
        [body.title,
        body.content,
        body.writer],
        (err, result) => {
        if(err) throw err;

        myQuery.commit();
        res.send({success:true});
    })
}

export default { list, add }