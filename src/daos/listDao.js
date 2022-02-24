import db from '../database.js';
import debug from 'debug';

// const conn = db.init();

let list = (req, res) => {
    db.query("SELECT * FROM posts", (err, row) => {
        if(err) throw err;
        res.send({success:true, data:row})
    })
}

let add = (req, res) => {
    let body = req.body;
    let sql = "INSERT INTO posts (TITLE, CONTENT, WRITER, TIME) VALUES (?, ?, ?, '', now())";
    db.query(sql,
        [body.title,
        body.content,
        body.writer],
        (err, result) => {
        if(err) throw err;

        res.send({success:true});
    })
}

export default { list, add }