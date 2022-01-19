import {getConnectionTruckweight,sql,querysregistertemp} from '../database/truckweight/index'

export const getRegistertempBycarid= async (req, res) => {
  try {
    const pool = await getConnectionTruckweight();
    const { carid } = req.params;
    const result = await pool
      .request()
      .input("carid", carid)
      .query(querysregistertemp.getRegistertempBycarid);
    await pool.close();
    if (!result.recordset[0]) {
      throw new Error("ไม่พบข้อมูล")
    }
    res.status(200);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

