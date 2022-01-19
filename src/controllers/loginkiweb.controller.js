import {getConnectionkiweb,sql,querys} from '../database/kiweb/index'

export const getLoginPermission = async (req, res) => {
      const { loginid} = req.params;
  const pool = await getConnectionkiweb();
  const result = await pool.request()
    .input("loginuserid", loginid)
    .query(querys.getLoginPermission)
   await pool.close();
  console.log('result', result.recordset)
    res.status(200);
    return  res.json(result.recordset)
}