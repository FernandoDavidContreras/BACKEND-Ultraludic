import { costosHardware } from '../../models/costosHardaware'

// acceso a datos que estan registrados en la tabla costos de la Base de Datos
const getCostosHardware = async (req, res) => {
  try {
    const response = await costosHardware.findAll()
    res.json(response)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para obtener datos por la id de la base de datos
const getCostoHardware = async (req, res) => {
  try {
    const { id } = req.params
    const result = await costosHardware.findOne({
      where: {
        idCostoHardware: id
      }
    })
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para agregar datos a la base de datos.
const addCostosHardware = async (req, res) => {
  try {
    const { name, semana, idservicio } = req.body
    if (name === undefined || semana === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }
    await costosHardware.create({
      name,
      semana,
      idservicio
    })
    res.json({ message: 'costos add' })
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para eliminar datos de la base de datos
const deleteCostosHardware = async (req, res) => {
  try {
    const { id } = req.params
    const result = await costosHardware.destroy({
      where: {
        idCostoHardware: id
      }
    })
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// actualizar valores de la base de datos
const updateCostosHardware = async (req, res) => {
  try {
    const { id } = req.params

    const { name, semana, idservicio } = req.body

    if (id === undefined || semana === undefined || name === undefined || idservicio === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }
    const result = await costosHardware.findByPk(id)
    result.set(req.body)
    await result.save()
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// exportamos las funciones para hacer uso en language.routes.js
export const methods = {
  getCostosHardware,
  getCostoHardware,
  addCostosHardware,
  deleteCostosHardware,
  updateCostosHardware
}
