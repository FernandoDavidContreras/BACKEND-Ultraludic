import { Router } from 'express'
import { methods as services } from '../controllers/services.controller.js'

const routerServices = Router()

// ruta para acceder a todos los datos de la tabla servicios de la base de datos.
routerServices.get('/', services.getServices)
// ruta para acceder a un dato los datos de la tabla servicios de la base de datos.
routerServices.get('/:id', services.getService)

routerServices.post('/', services.addService)

routerServices.get('/:id/costos', services.getServiciosCosto)

export default routerServices
