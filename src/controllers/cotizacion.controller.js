import { Cotizacion } from '../../models/cotizacion.js'
import { costosHardware } from '../../models/costosHardaware.js'
import { CostosSoftware } from '../../models/costos.js'
import { Servicios } from '../../models/servicios.js'

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
    const { name, descripcion, costoDolar, alquilerCosto, costoTotal, requerimientoshardware, tiempoalquiler, requerimientoshardwareUser, requerimientossoftware, disenio, tiempoEntrega, facturacion, implementaciones, derechosUno, idservices, idpresolicitud, costossoftware, costoshardware, impuestos, idUser } = req.body
    if (name === undefined || descripcion === undefined || costoTotal === undefined || requerimientossoftware === undefined || idservices === undefined || idpresolicitud === undefined || costossoftware === undefined || idUser === undefined || disenio === undefined || implementaciones === undefined || derechosUno === undefined || facturacion === undefined || tiempoEntrega === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }

    await Cotizacion.create({
      name,
      descripcion,
      costoDolar,
      alquilerCosto,
      requerimientoshardware,
      tiempoalquiler,
      requerimientoshardwareUser,
      requerimientossoftware,
      costossoftware,
      costoshardware,
      impuestos,
      costoTotal,
      disenio,
      tiempoEntrega,
      facturacion,
      implementaciones,
      derechosUno,
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

const getRelacionCotizacion = async (req, res) => {
  try {
    const { id } = req.params
    const response = await Cotizacion.findOne({

      where: {
        idCotizaciones: id
      },
      attributes: [
        'idCotizaciones',
        'name',
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
        'implementaciones',
        'derechosUno'
      ],
      include: [
        {
          model: Servicios,
          attributes: [
            'idServicios',
            'name'
          ],
          include: [
            {
              model: costosHardware,
              attributes: [
                'idCostoHardware',
                'name',
                'semana'
              ]
            },
            {
              model: CostosSoftware,
              attributes: [
                'idCosto',
                'name',
                'precio'
              ]
            }
          ]
        }
      ]
    }
    )
    res.json(response)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const methods = {
  getCotizaciones,
  getCotizacion,
  addCotizacion,
  deleteCotizacion,
  getRelacionCotizacion
}
