import db from '../database.js';

const myQuery = await db();

let list = (req, res) => {
    let ipp = 10;
	let totalCount = 0;
	let block = 10;
	let total_page = 0;
	let page = 1;
	let start = 0;
	let end = ipp;
	let start_page = 1;
	let end_page = block;
	let where = '';

    let sql = "SELECT count(*) cnt FROM posts"
    myQuery.execute("SELECT * FROM posts", (err, list) => {
        if(err) throw err;
        totalCount = data[0].cnt;

        total_page = Math.ceil(totalCount/ipp);

        res.send({success:true, list:list})
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