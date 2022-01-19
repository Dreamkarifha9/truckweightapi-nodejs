import { Router } from 'express'
import {getRegistertempBycarid} from '../controllers/register_temp.controller'
const router = Router()

router.get('/RegistertempBycarid/:carid', getRegistertempBycarid )

export default router