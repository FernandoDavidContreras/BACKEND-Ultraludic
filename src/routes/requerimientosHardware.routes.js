import { Router } from 'express'
import { methods } from '../controllers/requerimientosHardware.controller'

const requerimientosHardwareRoute = Router()

requerimientosHardwareRoute.get('/', methods.getRequetimientosHardware)// ruta para obtener todos los datos
requerimientosHardwareRoute.get('/:id', methods.getRequetimientoHardware)// ruta para obtener un dato
requerimientosHardwareRoute.post('/', methods.addrequerimientosHardware)// ruta para agregar datos
requerimientosHardwareRoute.delete('/:id', methods.deleteRequerimientosHardware)// ruta para eliminar

export default requerimientosHardwareRoute
