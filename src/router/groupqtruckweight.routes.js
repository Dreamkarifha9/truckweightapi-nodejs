import { Router } from 'express'
import {getTruckGroupQ,createNewTruckGroupQ,updateTruckQGroup,getTruckGroupQLastRFIDbyCartype} from '../controllers/groupqtruckweight.controller'
const router = Router()

router.get('/TruckGroupQ', getTruckGroupQ)
router.post('/TruckGroupQ', createNewTruckGroupQ)
router.get("/TruckGroupQ/LastRFIDbyCartype/:cartypeid/:startcaneyear/:endcaneyear", getTruckGroupQLastRFIDbyCartype)
router.put("/TruckGroupQ/:groupid", updateTruckQGroup);

export default router