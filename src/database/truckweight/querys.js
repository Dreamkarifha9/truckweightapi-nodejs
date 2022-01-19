export const querys = {
  getAllTruckQGroup: `SELECT GroupId, GroupCarTypeId, GroupQ, GroupQType, GroupSupUser, GroupCenter, CarTypeFar, CarCutNum,
   GroupSubCarType, CaneYear, QRFID, CreateAt FROM   TruckQGroup`,
  getTruckQGroupById: `SELECT * FROM TruckQGroup Where GroupId = @groupid`,
  addNewTruckQGroup:
    `INSERT INTO TruckQGroup (name, description, quantity) VALUES (@name,@description,@quantity);`,
  deleteTruckQGroup: `DELETE FROM TruckQGroup WHERE GroupId= @groupid`,
  updateTruckQGroupById:
    `UPDATE TruckQGroup SET QRFID = @qrfid WHERE GroupId = @groupid
    SELECT GroupId, GroupCarTypeId, GroupQ, GroupQType, GroupSupUser,
    GroupCenter, CarTypeFar, CarCutNum, GroupSubCarType, CaneYear, QRFID, CreateAt
    FROM TruckQGroup WHERE (GroupId = @groupid)`,
  getLastRFIDbyCartype: `SELECT TOP (1) GroupId, GroupCarTypeId, GroupQ, GroupQType, GroupSupUser,
 GroupCenter, CarTypeFar, CarCutNum, GroupSubCarType, CaneYear, QRFID, CreateAt FROM  TruckQGroup
  WHERE  (GroupCarTypeId = @cartypeid) AND (CaneYear = @caneyear)
  ORDER BY CreateAt DESC, GroupCarTypeId DESC, GroupQ DESC`,
 getAllTruckQCarType: `SELECT CarTypeId, CartypeName, CartypeWeight, CarTypeHH
FROM  TruckQCarType`
};


export const querysregistertemp = {
  getAllRegistertemp: `SELECT * FROM  Register_temp`,
  getRegistertempBycarid: `SELECT  * FROM   Register_temp WHERE  (carid = @carid)`,
};

export const queryparkinglot = {
  getAllParkinglot: `EXEC [usp_ParkinglotPagination] @page = @page, @size = @size, @search = @search, @searchbypom = @searchbypom, @orderBy = @orderBy, @orderDir = @orderDir`,
  getAllParkinglotbycarid: `EXEC [usp_ParkinglotbycaridPagination] @page = @page, @size = @size, @search = @search, @searchbycarin = @searchbycarin, @orderBy = @orderBy, @orderDir = @orderDir`,
  getAllParkinglotTransction: `EXEC [usp_ParkingLotTransctionPagination] @page = @page, @size = @size, @search = @search, @searchbypom = @searchbypom, @orderBy = @orderBy, @orderDir = @orderDir`,
  FindparkinglotbypomAndrow: `SELECT carid, rowsnum, carin, carout, pommain, createdate, datetimeout, qnumber, rfid
FROM   ParkingLot WHERE   (carin = 1) AND (pommain = @pommain) AND (rowsnum = @rowsnum)`,
  addToparkinglottranscetion:
    `INSERT INTO ParkingLotTransction (carid, rowsnum, carin,carout,pommain,qnumber,rfid) VALUES (@carid,@rowsnum,@carin,@carout,@pommain,@qnumber,@rfid);`,
  deleteParkingLotTransction: `DELETE FROM ParkingLot WHERE pommain= @pommain AND rowsnum= @rowsnum`,
}