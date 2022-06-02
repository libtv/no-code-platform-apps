import dotenv from 'dotenv';
import knex from 'knex';
import oracledb from 'oracledb';
import knexfile from "./database.js";

dotenv.config()

if (process.platform === 'win32') { // Windows
    oracledb.initOracleClient({ libDir: 'C:\\oracle\\instantclient_19_12' });
  } else if (process.platform === 'darwin') { // macOS
    oracledb.initOracleClient({ libDir: process.env.HOME + '/Downloads/instantclient_19_8' });
  }

// export default knex(knexfile.oracledb);