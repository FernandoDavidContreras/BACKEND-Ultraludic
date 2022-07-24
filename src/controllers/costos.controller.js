import { getConnection } from '../database/database'

// acceso a datos que estan registrados en la tabla costos de la Base de Datos
const getCostos = async (req, res) => {
  try {
    const connection = await getConnection()
    const result = await connection.query('SELECT idCosto, name, hora, semana, precio FROM costos')// para acceder a datos concretos de la base de datos.
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
    const connection = await getConnection()
    const result = await connection.query('SELECT idCosto, name, hora, semana, precio FROM costos WHERE idCosto = ?', id)
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para agregar datos a la base de datos.
const addCostos = async (req, res) => {
  try {
    const { name, hora, semana, precio } = req.body
    if (hora === undefined || semana === undefined || precio === undefined || name === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }
    const costos = { name, hora, semana, precio }
    const connection = await getConnection()
    await connection.query('INSERT INTO costos SET ?', costos)
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
    const connection = await getConnection()
    const result = await connection.query('DELETE FROM costos WHERE idCosto = ?', id)
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
    const { name, hora, semana, precio } = req.body
    if (id === undefined || hora === undefined || semana === undefined || precio === undefined || name === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }
    const costos = { name, hora, semana, precio }
    const connection = await getConnection()
    const result = await connection.query('UPDATE costos SET ? WHERE idCosto = ?', [costos, id])
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
