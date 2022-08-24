import { Router } from 'express'
import { methods } from '../controllers/cotizacion.controller'

const routesCotizacion = Router()

routesCotizacion.get('/', methods.getCotizaciones)
routesCotizacion.get('/:id', methods.getCotizacion)
routesCotizacion.post('/', methods.addCotizacion)
routesCotizacion.delete('/:id', methods.deleteCotizacion)

export default routesCotizacion
