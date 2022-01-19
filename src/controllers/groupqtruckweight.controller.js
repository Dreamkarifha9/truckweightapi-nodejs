import {getConnectionTruckweight,sql,querys} from '../database/truckweight/index'

export const getTruckGroupQ = async (req, res) => {
  try {
      const pool = await getConnectionTruckweight();
    const result = await pool.request().query(querys.getAllTruckQGroup)
     await pool.close();
  console.log('result', result.recordset)
  res.json(result.recordset)
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }

}

export const createNewTruckGroupQ = (req, res) => {
  const { GroupCarTypeId, GroupQ, QRFID } = req.body;
  console.log(GroupCarTypeId, GroupQ, QRFID);
  res.json('New truckgroup');
}

export const getTruckGroupQById = async (req, res) => {
  try {
    const pool = await getConnectionTruckweight();

    const result = await pool
      .request()
      .input("groupid", req.params.groupid)
      .query(querys.getTruckQGroupById);
     await pool.close();
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTruckGroupQLastRFIDbyCartype = async (req, res) => {
  try {
    const pool = await getConnectionTruckweight();
    const { startcaneyear,endcaneyear} = req.params;
    const result = await pool
      .request()
      .input("cartypeid", req.params.cartypeid)
      .input("caneyear", startcaneyear + "/" + endcaneyear)
      .query(querys.getLastRFIDbyCartype);
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
};

export const updateTruckQGroup = async (req, res) => {
    const { qrfid } = req.body;
  // validating
  if (qrfid == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }
  try {
    const pool = await getConnectionTruckweight();
   const updateEvent = await pool
      .request()
      .input("qrfid", sql.NVarChar, qrfid)
      .input("groupid", req.params.groupid)
      .query(querys.updateTruckQGroupById);
    await pool.close();
    console.log('updateEvent.recordset',updateEvent)
    res.status(200);
   return res.json(updateEvent.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};