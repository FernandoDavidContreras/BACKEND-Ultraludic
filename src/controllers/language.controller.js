import { getConnection } from './../database/database'

// acceso a datos que estan registrados en la Base de Datos
const getLanguages = async (req, res) => {
  try {
    const connection = await getConnection()
    const result = await connection.query('SELECT id, name, programmers FROM lenguage')// para acceder a datos concretos de la base de datos.
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para obtener datos de la base de datos
const getLanguage = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnection()
    const result = await connection.query('SELECT id, name, programmers FROM lenguage WHERE id = ?', id)
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para agregar datos a la base de datos.
const addLanguage = async (req, res) => {
  try {
    const { name, programmers } = req.body
    if (name === undefined || programmers === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }
    const language = { name, programmers }
    const connection = await getConnection()
    await connection.query('INSERT INTO lenguage SET ?', language)
    res.json({ message: 'Lenguage add' })
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para eliminar datos de la base de datos
const deleteLanguage = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnection()
    const result = await connection.query('DELETE FROM lenguage WHERE id = ?', id)
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// actualizar valores de la base de datos
const updateLanguage = async (req, res) => {
  try {
    const { id } = req.params
    const { name, programmers } = req.body
    if (id === undefined || name === undefined || programmers === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }
    const language = { id, name, programmers }
    const connection = await getConnection()
    const result = await connection.query('UPDATE lenguage SET ? WHERE id = ?', [language, id])
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// exportamos las funciones para hacer uso en language.routes.js
export const methods = {
  getLanguages,
  getLanguage,
  addLanguage,
  deleteLanguage,
  updateLanguage
}
