import oracledb from "oracledb";
import dotenv from 'dotenv';
import { query, response } from "express";

dotenv.config({
    path : "./.env"
});

function DBConnection () {
    this.connect = null
}

DBConnection.prototype.init = async function () {
    this.connect = await oracledb.getConnection({
        user          : process.env.ORACLE_USER,
        password      : process.env.ORACLE_PASSWORD,
        connectString : process.env.ORACLE_HOST + "/" + process.env.ORACLE_DATABASE
    });
}

const dbConnection = new DBConnection();

async function myQuery() {
    if (dbConnection.connect == null) {
        await dbConnection.init();
    }
    
    return dbConnection.connect
}

export default myQuery