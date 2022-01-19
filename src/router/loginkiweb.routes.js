import { Router } from 'express'
import {getLoginPermission} from '../controllers/loginkiweb.controller'
const router = Router()

router.get('/permissionlogin/:loginid', getLoginPermission )

export default router