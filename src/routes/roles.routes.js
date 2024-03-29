import { Router } from 'express'
import { methods } from '../controllers/roles.controller.js'

const rolesRoutes = Router()

rolesRoutes.get('/', methods.getRoles)
rolesRoutes.post('/', methods.addRoles)
rolesRoutes.delete('/:id', methods.deleteRol)

export default rolesRoutes
