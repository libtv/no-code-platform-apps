import logger from '../logger.js';
import db from '../database.js';

// const myQuery = await db();
const postgres = await db();

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

    let body = req.query;

    let sql = "SELECT count(*) cnt FROM posts";
    myQuery.execute(sql, (err, data) => {
        if(err) throw err;
        totalCount = data.rows[0][0];

        total_page = Math.ceil(totalCount/ipp);

        if(body.page) page = body.page;
		start = (page - 1) * 10;
		start_page = Math.ceil(page / block);
		end_page = start_page * block;

        if(total_page < end_page) end_page = total_page;

		let paging = {
			"totalCount": totalCount
			,"total_page": total_page
			,"page": page
			,"start_page": start_page
			,"end_page": end_page
			,"ipp": ipp
		}

        let sql = "SELECT * FROM posts ORDER BY time DESC";
        myQuery.execute(sql, (err, list) => {
            if(err) throw err;

            res.send({success:true, list:list, paging:paging})
        })
    })
}

let view = (req, res) => {
    let body = req.query;
    let num = req.params.num;
    console.log(req.params.num)
    let sql = "SELECT * FROM posts WHERE id = :1";
    myQuery.execute(sql, [num], (err, view) => {
        if(err) throw err;

        res.send({success:true, view:view})
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

let add2 = (req, res) => {
    let sql = "INSERT INTO posts (TITLE, CONTENT, WRITER, TIME) VALUES ($1, $2, $3, NOW)";
    postgres.execute(sql, [],
        (err, result) => {
            if(err) throw err;

            postgres.commit();
            res.send({success:true});
        })
}

export default { list, view, add, add2 }