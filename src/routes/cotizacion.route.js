import { Router } from 'express'
import { methods } from '../controllers/cotizacion.controller'
import { verifyToken, verifyAdmin } from '../controllers/verifyDates'

const routesCotizacion = Router()

routesCotizacion.get('/', [verifyToken, verifyAdmin], methods.getCotizaciones)
routesCotizacion.get('/:id', verifyToken, methods.getCotizacion)
routesCotizacion.get('/realcionCotizacion/:id', methods.getRelacionCotizacion)
routesCotizacion.post('/', [verifyToken, verifyAdmin], methods.addCotizacion)
routesCotizacion.delete('/:id', [verifyToken, verifyAdmin], methods.deleteCotizacion)

export default routesCotizacion
