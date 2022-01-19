export const querys = {
  getLoginPermission: `SELECT LoginA.LoginUserID, LoginGroup.LgGroup,
  Login.LoginName, Login.LoginUser, Login.LoginEmpId FROM LoginA INNER
   JOIN Login ON LoginA.LoginUserID = Login.LoginId LEFT OUTER JOIN
    LoginGroup ON LoginA.LoginG = LoginGroup.LgId WHERE
    (LoginA.LoginUserID = @loginuserid) AND (LoginGroup.LgGroup IS NOT NULL)`,
};