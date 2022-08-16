import { Solicitud } from '../../models/solicitud'

const getPresolicitudes = async (req, res) => {
  try {
    const solicitud = await Solicitud.findAll()
    res.json(solicitud)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

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

const addPresolicitud = async (req, res) => {
  try {
    const { descripcion, requerimientosHardware, requerimientosSoftware, tiempo, empresa, FechaSolicitud, idservices, idusuarios } = req.body

    if (descripcion === undefined || tiempo === undefined || empresa === undefined || FechaSolicitud === undefined || idservices === undefined || idusuarios === undefined || requerimientosHardware === undefined || requerimientosSoftware === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }
    const newPresolicitud = await Solicitud.create(
      { descripcion, requerimientosHardware, requerimientosSoftware, tiempo, empresa, FechaSolicitud, idservices, idusuarios }
    )
    res.json(newPresolicitud)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

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
