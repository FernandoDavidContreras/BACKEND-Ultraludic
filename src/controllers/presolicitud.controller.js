import { Solicitud } from '../../models/solicitud'

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
    const { descripcion, requerimientosHardware, requerimientosHardwareUser, requerimientosSoftware, tiempo, tiempoAlquiler, kiosco, empresa, cotizada, idservices, idusuarios } = req.body

    if (descripcion === undefined || tiempo === undefined || empresa === undefined || idservices === undefined || idusuarios === undefined || requerimientosSoftware === undefined || kiosco === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }
    const newPresolicitud = await Solicitud.create(
      { descripcion, requerimientosHardware, requerimientosHardwareUser, requerimientosSoftware, tiempo, tiempoAlquiler, kiosco, empresa, cotizada, idservices, idusuarios }
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

export const methods = {
  getPresolicitudes,
  getPresolicitud,
  addPresolicitud,
  deletePresolicitud
}
