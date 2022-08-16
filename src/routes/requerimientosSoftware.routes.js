import { Router } from 'express'
import { methods } from '../controllers/requerimientosSoftware.controller'

const requerimientosSoftwareRoute = Router()

requerimientosSoftwareRoute.get('/', methods.getRequerimientosSoftware)
requerimientosSoftwareRoute.get('/:id', methods.getRequetimientoSoftware)
requerimientosSoftwareRoute.post('/', methods.addrequerimientosSoftware)
requerimientosSoftwareRoute.delete('/:id', methods.deleteRequerimientosSoftware)

export default requerimientosSoftwareRoute
