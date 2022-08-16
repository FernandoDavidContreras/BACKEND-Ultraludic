import { Usuarios } from '../../models/usuarios'
import { Solicitud } from '../../models/solicitud'
import { Servicios } from '../../models/servicios'

const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuarios.findAll()
    res.json(usuarios)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getUsuario = async (req, res) => {
  try {
    const { id } = req.params
    const response = await Usuarios.finOne({
      where: {
        idUsuarios: id
      }
    })
    res.json(response)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const addUsuario = async (req, res) => {
  try {
    const { nombre, correo, contrasenia } = req.body
    if (nombre === undefined || correo === undefined || contrasenia === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }
    const newUsuario = await Usuarios.create({
      nombre,
      correo,
      contrasenia
    })
    res.json(newUsuario)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params
    await Usuarios.destroy({
      where: {
        idUsuarios: id
      }
    })
    res.sendStatus(204)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

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
          model: Usuarios,
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
  getUsuarioSolicitud
}
