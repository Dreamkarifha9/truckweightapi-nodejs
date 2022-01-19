import { config } from 'dotenv'

config();


export default {
  port: process.env.port || 4002,
  dbkiwebUser: process.env.DBKIWEB_USER || "",
  dbkiwebPassword: process.env.DBKIWEB_PASSWORD || "",
  dbkiwebServer: process.env.DBKIWEB_SERVER || "",
  dbkiwebDatabase: process.env.DBKIWEB_DATABASE || "",
  dbtruckweightUser: process.env.DBTRUCKWEIGHT_USER || "",
  dbtruckweightPassword: process.env.DBTRUCKWEIGHT_PASSWORD || "",
  dbtruckweightServer: process.env.DBTRUCKWEIGHT_SERVER || "",
  dbtruckweightDatabase: process.env.DBTRUCKWEIGHT_DATABASE || "",
}