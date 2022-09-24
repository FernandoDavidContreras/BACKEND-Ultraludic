import { Servicios } from '../../models/servicios.js'
import { CostosSoftware } from '../../models/costos.js'

// funcion para obtener todos los valores de la tablad de la BD
const getServices = async (req, res) => {
  try {
    const services = await Servicios.findAll()
    res.json(services)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para obtener un solo registro
const getService = async (req, res) => {
  try {
    const { id } = req.params
    const response = await Servicios.findAll({
      where: {
        idServicios: id
      }
    })
    res.json(response)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const addService = async (req, res) => {
  try {
    const { name } = req.body
    if (name === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }

    await Servicios.create({
      name
    })

    res.json({ message: 'service add' })
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// ruta para hcer la relacion de la tabla servicios con la tabla costos
const getServiciosCosto = async (req, res) => {
  try {
    const { id } = req.params
    const response = await Servicios.findAll({
      attributes: [
        'idServicios',
        'name'
      ],
      include: [
        {
          model: CostosSoftware,
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
  addService,
  getServiciosCosto
}
