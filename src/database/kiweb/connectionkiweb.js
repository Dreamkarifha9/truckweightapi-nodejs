import sql from "mssql"
import config from '../../config'
const dbSettings = {
  user: config.dbkiwebUser,
  password: config.dbkiwebPassword,
  server: config.dbkiwebServer,
  database: config.dbkiwebDatabase,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  }
};

export async function getConnectionkiweb() {
   try {
     const pool = await sql.connect(dbSettings);
     return pool;
   } catch (error) {
     console.log(error)
   }
}

export { sql };


