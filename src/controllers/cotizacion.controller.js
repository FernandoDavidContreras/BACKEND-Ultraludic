import { Cotizacion } from '../../models/cotizacion'

const getCotizaciones = async (req, res) => {
  try {
    const result = await Cotizacion.findAll()
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}
const getCotizacion = async (req, res) => {
  try {
    const { id } = req.params
    const response = await Cotizacion.findOne({
      where: {
        idCotizaciones: id
      }
    })
    res.json(response)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}
const addCotizacion = async (req, res) => {
  try {
    const { name, costoTotal, requerimientoshardware, requerimientoshardwareUser, requerimientossoftware, disenio, implementaciones, derechos, idservices, idpresolicitud, costossoftware, costoshardware, idUser } = req.body
    if (name === undefined || costoTotal === undefined || requerimientossoftware === undefined || idservices === undefined || idpresolicitud === undefined || costossoftware === undefined || idUser === undefined || disenio === undefined || implementaciones === undefined || derechos === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }

    await Cotizacion.create({
      name,
      costoTotal,
      requerimientoshardware,
      requerimientoshardwareUser,
      requerimientossoftware,
      costossoftware,
      costoshardware,
      disenio,
      implementaciones,
      idservices,
      idpresolicitud,
      idUser
    })
    res.json({ message: 'cotizacion create' })
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}
const deleteCotizacion = async (req, res) => {
  try {
    const { id } = req.params
    await Cotizacion.destroy({
      where: {
        idCotizaciones: id
      }
    })

    res.json('cotizacion eliminada')
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const methods = {
  getCotizaciones,
  getCotizacion,
  addCotizacion,
  deleteCotizacion
}
