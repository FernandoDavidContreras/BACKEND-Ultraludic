import { Servicios } from '../../models/servicios'
import { Costos } from '../../models/costos'

const getServices = async (req, res) => {
  try {
    const services = await Servicios.findAll()
    res.json(services)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getService = async (req, res) => {
  try {
    const { id } = req.params
    const response = await Servicios.findAll({
      where: {
        idServiciosPrincipales: id
      }
    })
    res.json(response)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getServiciosCosto = async (req, res) => {
  try {
    const { id } = req.params
    const response = await Servicios.findAll({
      attributes: [
        'idServicios',
        'name',
        'idServiciosPrincipales'
      ],
      include: [
        {
          model: Costos,
          where: {
            idservicios: id
          },
          attributes: ['idCosto', 'name', 'semana', 'hora', 'precio', 'idservicios']
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
  getServices,
  getService,
  getServiciosCosto
}
