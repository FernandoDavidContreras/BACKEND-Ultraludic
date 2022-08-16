import { ServiciosPrincipales } from '../../models/serviciosprincipales'
// obtener datos de la tabla serviciosprincipales de la bd
const getServicesPrincipal = async (req, res) => {
  try {
    const servicesPrincipal = await ServiciosPrincipales.findAll()
    res.json(servicesPrincipal)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getServicePrincipal = async (req, res) => {
  try {
    const { id } = req.params
    const response = await ServiciosPrincipales.findOne({
      where: {
        idServiciosP: id
      }
    })
    res.json(response)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// agregar un dato de la tabla serviciosprincipales de la bd
const addServicePrincipal = async (req, res) => {
  try {
    const { nombre } = req.body
    if (nombre === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }
    const newServicesPrincipal = await ServiciosPrincipales.create({
      nombre
    })
    res.json(newServicesPrincipal)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const updateServicePrincipal = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre } = req.body
    const response = await ServiciosPrincipales.findByPk(id)
    response.nombre = nombre
    await response.save()
    res.json(response)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const deleteServicePrincipal = async (req, res) => {
  try {
    const { id } = req.params
    await ServiciosPrincipales.destroy({
      where: {
        idServiciosP: id
      }
    })
    res.sendStatus(204)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const methods = {
  getServicesPrincipal,
  addServicePrincipal,
  updateServicePrincipal,
  deleteServicePrincipal,
  getServicePrincipal
}
