import { Usuarioos, methods as usuariosMetodos } from '../../models/usuarios.js'
import { Cotizacion } from '../../models/cotizacion.js'
import pgj from 'jsonwebtoken'
import pkg from 'bcryptjs'
import config from '../config.js'
const bcrypt = pkg// variable para acceder a las funciones de encriptamiento para el password
const jwt = pgj

// funcion para obtener todos lo datos de la BD
const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuarioos.findAll()
    res.json(usuarios)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para obtener un solo dato de la BD
const getUsuario = async (req, res) => {
  try {
    const { id } = req.params

    const user = await Usuarioos.findOne({
      where: { idUsuarios: id }
    })
    // const response = await Usuarios.finOne({
    //   where: {
    //     idUsuarios: id
    //   }
    // })
    res.json(user)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para agregar usuarios a la BD
const addUsuario = async (req, res, next) => {
  try {
    const { nombre, correo, telefono, contrasenia, idRoles } = req.body
    if (nombre === undefined || correo === undefined || contrasenia === undefined || idRoles === undefined || telefono === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }

    const user = await Usuarioos.findOne({
      where: {
        nombre,
        correo,
        telefono,
        idRoles
      }
    })

    if (user) {
      res.json({ message: 'El usuario ya existe' })
    } else {
      // incriptamos la contrasenia
      const contraseniaCrypt = await usuariosMetodos.encryptPassword(contrasenia)

      const newUsuario = await Usuarioos.create({
        nombre,
        correo,
        telefono,
        contrasenia: contraseniaCrypt,
        idRoles
      })
      const token = jwt.sign({ id: newUsuario.idUsuarios }, config.secret)
      res.json({ newUsuario, token })
    }
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para eliminar usuarios de la BD
const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params
    await Usuarioos.destroy({
      where: {
        idUsuarios: id
      }
    })
    res.sendStatus(204, 'eliminado')
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const recuperarUser = async (req, res) => {
  try {
    const { nombre, correo, telefono, contrasenia } = req.body
    if (nombre === undefined || correo === undefined || contrasenia === undefined || telefono === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }

    const user = await Usuarioos.findOne({
      where: {
        nombre,
        correo,
        telefono
      }
    })

    if (user) {
      // incriptamos la contrasenia
      const contraseniaCrypt = await usuariosMetodos.encryptPassword(contrasenia)
      await Usuarioos.update({
        contrasenia: contraseniaCrypt
      },
      {
        where: {
          nombre,
          correo
        }
      })

      res.json({ message: 'Cambio de contraseña realizado correctamente', cambio: true })
    } else {
      res.status(404).send('El usuario no existe')
    }
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getVerification = async (req, res) => {
  try {
    const response = await Usuarioos.findOne({
      where: {
        idUsuarios: req.userId
      }
    })
    if (!response) {
      return res.status(404).send('No user found')
    }
    res.json(response)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getSignin = async (req, res) => {
  try {
    const { nombre, correo, contrasenia } = req.body
    const user = await Usuarioos.findOne({
      where: {
        nombre,
        correo
      }
    })

    // console.log(user)
    if (!user) {
      return res.status(404).send('El usuario no esta registrado')
    }

    const passwordValid = bcrypt.compareSync(contrasenia, user.dataValues.contrasenia)
    if (!passwordValid) {
      return res.status(401).json('El correo o el usuario es incorrecto')
    }

    const token = jwt.sign({ id: user.dataValues.idUsuarios }, config.secret)

    res.json({ user, token })
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para crear la relacion del usuario y la solicitud de una cotizacion
const getUsuarioCotizacion = async (req, res) => {
  try {
    const { id } = req.params
    const response = await Cotizacion.findAll({
      attributes: [
        'idCotizaciones',
        'name',
        'costoDolar',
        'alquilerCosto',
        'descripcion',
        'requerimientoshardware',
        'tiempoalquiler',
        'requerimientoshardwareUser',
        'requerimientossoftware',
        'costossoftware',
        'costoshardware',
        'impuestos',
        'costoTotal',
        'disenio',
        'tiempoEntrega',
        'facturacion',
        'implementaciones',
        'derechosUno',
        'idservices',
        'idpresolicitud',
        'idUser',
        'createdAt'
      ],
      include: [

        {
          model: Usuarioos,
          where: {
            idUsuarios: id
          },
          attributes: [
            'idUsuarios',
            'nombre',
            'correo'
          ]

        }
      ]
    })
    res.json(response)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const methods = {
  getUsuarios,
  getUsuario,
  addUsuario,
  deleteUsuario,
  getUsuarioCotizacion,
  getVerification,
  getSignin,
  recuperarUser
}
