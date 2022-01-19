import {getConnectionTruckweight,sql,queryparkinglot} from '../database/truckweight/index'

export const getallparkinglot= async (req, res) => {
  try {
    const { page, size, search, searchbypom, orderBy, orderDir } = req.params;
    console.log('req.params',req.params)
    const pool = await getConnectionTruckweight();
    const result = await pool.request()
      .input('page', Number(page) || 1)
      .input('size', Number(size) || 5)
      .input('search', search)
      .input('searchbypom', searchbypom)
      .input('orderBy', orderBy || 'createdate')
      .input('orderDir', orderDir || 'DESC')
      .query(queryparkinglot.getAllParkinglot)
     await pool.close();
    const count = result.recordsets[1][0];
    console.log('count',count)
        const parkinglot = { 
            records: result.recordsets[0],
            filtered: Math.ceil(count.Filtered / Number(size)),
            total: count.Total,
        };
        res.status(200);
        res.json(parkinglot);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export const InsertintoParkinglottotransection = async (req, res) => {
    const { pomq,rowsnum } = req.params;
  try {
   const pool = await getConnectionTruckweight();
    //  ค้นหาข้อมูล parkinglot ก่อนว่ามีข้อมูลไหม
    console.log(pomq,rowsnum)
     const Findparkinglotbypomq = await pool
      .request()
      .input("pommain", pomq)
      .input("rowsnum", rowsnum)
      .query(queryparkinglot.FindparkinglotbypomAndrow);
    console.log('Findparkinglotbypomq', Findparkinglotbypomq.recordset)
    if (Findparkinglotbypomq.recordset.length == 0) {
      await pool.close();
      throw new Error("ไม่พบข้อมูล")
      return
    }

    for (const [v1, v2] of Findparkinglotbypomq.recordset.entries()) {
      console.log(v2)
      // create Parkinglottranscetion
      await pool
      .request()
      .input("carid", sql.NVarChar, v2.carid)
      .input("rowsnum", sql.Int, v2.rowsnum)
      .input("carin", 0)
      .input("carout", 1)
      .input("pommain", sql.NVarChar, v2.pommain)
      .input("qnumber", sql.NVarChar, v2.qnumber)
      .input("rfid", sql.NVarChar, v2.rfid)
      .query(queryparkinglot.addToparkinglottranscetion);
    }
    // delete parkinglot by pommain,rowsnum
      await pool
      .request()
      .input("pommain", pomq)
      .input("rowsnum", rowsnum)
      .query(queryparkinglot.deleteParkingLotTransction);
    res.status(200);
   return res.json({message: "ปล่อยรถสำเร็จ", status: true});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getallparkinglotbycarid= async (req, res) => {
  try {
    const { page, size, search, searchbycarin, orderBy, orderDir } = req.params;
    console.log('req.params',req.params)
    const pool = await getConnectionTruckweight();
    const result = await pool.request()
      .input('page', Number(page) || 1)
      .input('size', Number(size) || 5)
      .input('search', search)
      .input('searchbycarin', Number(searchbycarin) || 1)
      .input('orderBy', orderBy || 'createdate')
      .input('orderDir', orderDir || 'DESC')
      .query(queryparkinglot.getAllParkinglotbycarid)
     await pool.close();
    const count = result.recordsets[1][0];
    console.log('count',count)
        const parkinglot = { 
            records: result.recordsets[0],
            filtered: Math.ceil(count.Filtered / Number(size)),
            total: count.Total,
        };
        res.status(200);
        res.json(parkinglot);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export const getallparkinglottransction= async (req, res) => {
  try {
    const { page, size, search, searchbypom, orderBy, orderDir } = req.params;
    console.log('req.params',req.params)
    const pool = await getConnectionTruckweight();
    const result = await pool.request()
      .input('page', Number(page) || 1)
      .input('size', Number(size) || 5)
      .input('search', search)
      .input('searchbypom', searchbypom)
      .input('orderBy', orderBy || 'createdate')
      .input('orderDir', orderDir || 'DESC')
      .query(queryparkinglot.getAllParkinglotTransction)
     await pool.close();
    const count = result.recordsets[1][0];
    console.log('count',count)
        const parkinglot = { 
            records: result.recordsets[0],
            filtered: Math.ceil(count.Filtered / Number(size)),
            total: count.Total,
        };
        res.status(200);
        res.json(parkinglot);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

