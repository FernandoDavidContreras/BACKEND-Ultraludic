import { Router } from 'express'
import { methods } from '../controllers/usuarios.controller'
const verifyToken = require('../controllers/verifyToken.js')
const usuariosRoute = Router()

usuariosRoute.get('/', methods.getUsuarios)// ruta para obtener usuarios
usuariosRoute.get('/verify', verifyToken, methods.getVerification)
usuariosRoute.get('/:id', methods.getUsuario)// ruta para obtener un solo usuario
usuariosRoute.get('/:id/solicitud', methods.getUsuarioSolicitud)// ruta para la relacion de usuarios y presolicitud
usuariosRoute.post('/signup', methods.addUsuario)// ruta para agregar usuarios
usuariosRoute.post('/sigin', methods.getSignin)
usuariosRoute.delete('/:id', methods.deleteUsuario)// ruta para eliminar usuarios

export default usuariosRoute
