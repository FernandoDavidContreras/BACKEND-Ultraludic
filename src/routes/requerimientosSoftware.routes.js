import { Router } from 'express'
import { methods } from '../controllers/requerimientosSoftware.controller'

const requerimientosSoftwareRoute = Router()

requerimientosSoftwareRoute.get('/', methods.getRequerimientosSoftware)// ruta para obtener todos los datos
requerimientosSoftwareRoute.get('/:id', methods.getRequetimientoSoftware)// ruta pra obtener un solo dato
requerimientosSoftwareRoute.post('/', methods.addrequerimientosSoftware)// ruta para agregatr datos
requerimientosSoftwareRoute.delete('/:id', methods.deleteRequerimientosSoftware)// ruta para eliminar datos

export default requerimientosSoftwareRoute
