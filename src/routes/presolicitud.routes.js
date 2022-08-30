import { Router } from 'express'
import { methods as presolicitudController } from '../controllers/presolicitud.controller'
const routerPresolicitud = Router()

routerPresolicitud.get('/', presolicitudController.getPresolicitudes)

routerPresolicitud.get('/:id', presolicitudController.getPresolicitud)

routerPresolicitud.post('/', presolicitudController.addPresolicitud)

routerPresolicitud.delete('/:id', presolicitudController.deletePresolicitud)

export default routerPresolicitud
