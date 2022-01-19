import {getConnectionTruckweight,sql,querys} from '../database/truckweight/index'

export const getTruckQCartype= async (req, res) => {
  try {
      const pool = await getConnectionTruckweight();
    const result = await pool.request().query(querys.getAllTruckQCarType)
     await pool.close();
        res.status(200);
        return  res.json(result.recordset)
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

