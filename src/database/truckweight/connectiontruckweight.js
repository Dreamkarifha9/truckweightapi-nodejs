import sql from "mssql"
import config from '../../config'
const dbSettings = {
  user: config.dbtruckweightUser,
  password: config.dbtruckweightPassword,
  server: config.dbtruckweightServer,
  database: config.dbtruckweightDatabase,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  }
};

export async function getConnectionTruckweight() {
   try {
     const pool = await sql.connect(dbSettings);
     return pool;
   } catch (error) {
     console.log(error)
   }
}

export { sql };


