import { Solicitud } from '../../models/solicitud'
import { Usuarioos } from '../../models/usuarios'

// obtener todos los datos de la tabla presolicitud
const getPresolicitudes = async (req, res) => {
  try {
    const solicitud = await Solicitud.findAll()
    res.json(solicitud)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// obtener un solo dato de la BD
const getPresolicitud = async (req, res) => {
  try {
    const { id } = req.params
    const solicitud = await Solicitud.findOne({
      where: {
        idPresolicitud: id
      }
    })
    res.json(solicitud)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// agregar una solicitud a la tabla Solicitud de la BD
const addPresolicitud = async (req, res) => {
  try {
    const { descripcion, requerimientosHardware, requerimientosSoftware, tiempo, empresa, idservices, idusuarios } = req.body

    if (descripcion === undefined || tiempo === undefined || empresa === undefined || idservices === undefined || idusuarios === undefined || requerimientosHardware === undefined || requerimientosSoftware === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }
    const newPresolicitud = await Solicitud.create(
      { descripcion, requerimientosHardware, requerimientosSoftware, tiempo, empresa, idservices, idusuarios }
    )
    res.json(newPresolicitud)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// eliminar una solicitud
const deletePresolicitud = async (req, res) => {
  try {
    const { id } = req.params
    await Solicitud.destroy({
      where: {
        idPresolicitud: id
      }
    })
    res.sendStatus(204)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getPresolicitudUser = async (req, res) => {
  try {
    const { id } = req.params
    const response = await Usuarioos.findAll({
      attributes: [
        'idUsuarios',
        'nombre',
        'correo'
      ],
      include: [
        {
          model: Solicitud,
          where: {
            idusuarios: id
          },
          attributes: [
            'descripcion',
            'requerimientosHardware',
            'requerimientosSoftware',
            'tiempo',
            'empresa'
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
  getPresolicitudes,
  getPresolicitud,
  addPresolicitud,
  deletePresolicitud,
  getPresolicitudUser
}
