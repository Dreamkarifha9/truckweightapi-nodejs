import { Router } from 'express'
import {getallparkinglot,getallparkinglottransction,getallparkinglotbycarid,InsertintoParkinglottotransection} from '../controllers/parkinglot.controller'
const router = Router()

router.get('/TruckQParkinglot/:page/:size/:search/:searchbypom/:orderBy/:orderDir', getallparkinglot)
router.get('/TruckQParkinglotbycarid/:page/:size/:search/:searchbycarin/:orderBy/:orderDir', getallparkinglotbycarid)
router.get('/TruckQParkinglottransction/:page/:size/:search/:searchbypom/:orderBy/:orderDir', getallparkinglottransction)
router.get('/TruckQParkinglotmove/:pomq/:rowsnum', InsertintoParkinglottotransection)

export default router