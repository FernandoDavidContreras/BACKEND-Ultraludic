import { Usuarioos } from '../../models/usuarios.js'
import { Roles } from '../../models/roles.js'
import pgj from 'jsonwebtoken'

import config from '../config.js'
const jwt = pgj

export const verifyToken = (req, res, next) => {
  try {
    const token = req.headers['x-access-token']
    if (!token) {
      return res.status(401).json({
        auth: false,
        message: 'no token provided'
      })
    }

    const decode = jwt.verify(token, config.secret)
    req.userId = decode.id
    next()
  } catch (error) {
    console.error(error)
  }
}

export const verifyAdmin = async (req, res, next) => {
  const user = await Usuarioos.findOne({
    where: {
      idUsuarios: req.userId
    }
  })

  const rol = await Roles.findOne({
    where: {
      idRol: user.idRoles
    }
  })

  if (rol.dataValues.name === 'Admin') {
    next()
    return
  }
  return res.status(403).json({ message: 'no tienes el rol de admin' })
}
