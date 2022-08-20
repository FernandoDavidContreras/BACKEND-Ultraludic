import { Usuarioos, methods as usuariosMetodos } from '../../models/usuarios'
import { Solicitud } from '../../models/solicitud'
import { Servicios } from '../../models/servicios'
import config from '../config'
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')// variable para acceder a las funciones de encriptamiento para el password

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
const addUsuario = async (req, res) => {
  try {
    const { nombre, correo, contrasenia } = req.body
    if (nombre === undefined || correo === undefined || contrasenia === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }

    // incriptamos la contrasenia
    const contraseniaCrypt = await usuariosMetodos.encryptPassword(contrasenia)

    const newUsuario = await Usuarioos.create({
      nombre,
      correo,
      contrasenia: contraseniaCrypt
    })
    const token = jwt.sign({ id: newUsuario.idUsuarios }, config.secret)
    console.log(token)
    res.json({ newUsuario, token })
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
      return res.status(401).json({ auth: false, token: null })
    }

    const token = jwt.sign({ id: user.dataValues.idUsuarios }, config.secret)

    res.json(token)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para crear la relacion del usuario y la solicitud de una cotizacion
const getUsuarioSolicitud = async (req, res) => {
  try {
    const { id } = req.params
    const response = await Solicitud.findAll({
      attributes: [
        'idPresolicitud',
        'descripcion',
        'requerimientosHardware',
        'requerimientosSoftware',
        'tiempo',
        'empresa',
        'FechaSolicitud',
        'idservices',
        'idusuarios'
      ],
      include: [
        {
          model: Servicios,
          attributes: [
            'idServicios',
            'name',
            'idServiciosPrincipales'
          ]
        },
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
  getUsuarioSolicitud,
  getVerification,
  getSignin
}
