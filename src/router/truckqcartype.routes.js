import { Router } from 'express'
import {getTruckQCartype} from '../controllers/truckqcartype.controller'
const router = Router()

router.get('/TruckGroupQCartype', getTruckQCartype )

export default router