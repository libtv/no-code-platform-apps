import oracledb from "oracledb";
import postgres from "pg";
import dotenv from 'dotenv';
import { query, response } from "express";

dotenv.config({
    path : "./.env"
});

// function DBConnection () {
//     this.connect = null
// }

// DBConnection.prototype.init = async function () {
//     this.connect = await oracledb.getConnection({
//         user          : process.env.ORACLE_USER,
//         password      : process.env.ORACLE_PASSWORD,
//         connectString : process.env.ORACLE_HOST + "/" + process.env.ORACLE_DATABASE
//     });
// }

// const dbConnection = new DBConnection();

// async function myQuery() {
//     if (dbConnection.connect == null) {
//         await dbConnection.init();
//     }
    
//     return dbConnection.connect
// }

// export default myQuery

export default postgres = new postgres({
    user : 'jihee',
    host : '101.101.162.252',
    database : 'pgdb',
    password : '',
    port : 5432
});

postgres.connect();