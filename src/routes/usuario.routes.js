import { Router } from 'express'
import { methods } from '../controllers/usuarios.controller'

const usuariosRoute = Router()

usuariosRoute.get('/', methods.getUsuarios)
usuariosRoute.get('/:id', methods.getUsuarios)
usuariosRoute.get('/:id/solicitud', methods.getUsuarioSolicitud)
usuariosRoute.post('/', methods.addUsuario)
usuariosRoute.delete('/:id', methods.deleteUsuario)

export default usuariosRoute
