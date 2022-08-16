import { Router } from 'express'
import { methods } from '../controllers/requerimientosHardware.controller'

const requerimientosHardwareRoute = Router()

requerimientosHardwareRoute.get('/', methods.getRequetimientosHardware)
requerimientosHardwareRoute.get('/:id', methods.getRequetimientoHardware)
requerimientosHardwareRoute.post('/', methods.addrequerimientosHardware)
requerimientosHardwareRoute.delete('/:id', methods.deleteRequerimientosHardware)

export default requerimientosHardwareRoute
