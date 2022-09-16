import { Router } from 'express'
import { methods as presolicitudController } from '../controllers/presolicitud.controller'
import { verifyToken, verifyAdmin } from '../controllers/verifyDates'
const routerPresolicitud = Router()

routerPresolicitud.get('/', [verifyToken, verifyAdmin], presolicitudController.getPresolicitudes)

routerPresolicitud.get('/:id', presolicitudController.getPresolicitud)

routerPresolicitud.post('/', presolicitudController.addPresolicitud)

routerPresolicitud.delete('/:id', presolicitudController.deletePresolicitud)

export default routerPresolicitud
