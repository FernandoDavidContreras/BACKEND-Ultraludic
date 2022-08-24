import { Router } from 'express'
import { methods } from '../controllers/usuarios.controller'
import { verifyToken, verifyAdmin } from '../controllers/verifyDates'
const usuariosRoute = Router()

usuariosRoute.get('/', methods.getUsuarios)// ruta para obtener usuarios
usuariosRoute.get('/verify', verifyToken, methods.getVerification)
usuariosRoute.get('/:id', [verifyToken, verifyAdmin], methods.getUsuario)// ruta para obtener un solo usuario
usuariosRoute.get('/:id/cotizacion', methods.getUsuarioCotizacion)// ruta para la relacion de usuarios y presolicitud
usuariosRoute.post('/signup', methods.addUsuario)// ruta para agregar usuarios
usuariosRoute.post('/sigin', methods.getSignin)
usuariosRoute.delete('/:id', [verifyToken, verifyAdmin], methods.deleteUsuario)// ruta para eliminar usuarios

export default usuariosRoute
