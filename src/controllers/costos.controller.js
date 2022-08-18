import { Costos } from '../../models/costos'

// acceso a datos que estan registrados en la tabla costos de la Base de Datos
const getCostos = async (req, res) => {
  try {
    const result = await Costos.findAll()
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para obtener datos por la id de la base de datos
const getCosto = async (req, res) => {
  try {
    const { id } = req.params
    const result = await Costos.findOne({
      where: {
        idCosto: id
      }
    })
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para agregar datos a la base de datos.
const addCostos = async (req, res) => {
  try {
    const { name, semana, hora, precio, idservicios } = req.body
    if (name === undefined || semana === undefined || hora === undefined || precio === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }
    await Costos.create({
      name,
      semana,
      hora,
      precio,
      idservicios
    })
    res.json({ message: 'costos add' })
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para eliminar datos de la base de datos
const deleteCostos = async (req, res) => {
  try {
    const { id } = req.params
    const result = await Costos.destroy({
      where: {
        idCosto: id
      }
    })
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// actualizar valores de la base de datos
const updateCostos = async (req, res) => {
  try {
    const { id } = req.params
    const { name, hora, semana, precio, idservicios } = req.body
    if (id === undefined || hora === undefined || semana === undefined || precio === undefined || name === undefined || idservicios === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }
    const result = await Costos.findByPk(id)
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
  getCostos,
  getCosto,
  addCostos,
  deleteCostos,
  updateCostos
}
