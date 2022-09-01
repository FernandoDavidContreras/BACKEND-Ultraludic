import { Router } from 'express'
import { methods } from '../controllers/cotizacion.controller'
import { verifyToken, verifyAdmin } from '../controllers/verifyDates'

const routesCotizacion = Router()

routesCotizacion.get('/', methods.getCotizaciones)
routesCotizacion.get('/:id', methods.getCotizacion)
routesCotizacion.post('/', [verifyToken, verifyAdmin], methods.addCotizacion)
routesCotizacion.delete('/:id', [verifyToken, verifyAdmin], methods.deleteCotizacion)

export default routesCotizacion
