import { getConnection } from '../database/database'

// obtener datos de la tabla serviciosprincipales de la bd
const getServicesPrincipal = async (req, res) => {
  try {
    const connection = await getConnection()
    const result = await connection.query(
      'SELECT idServiciosP, nombre FROM serviciosprincipales'
    )
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// obtener un dato en concreto de la tabla serviciosprincipales de la bd
const getServicePrincipal = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnection()
    const result = await connection.query(
      'SELECT idServiciosP, nombre FROM serviciosprincipales WHERE idServiciosP = ?',
      id
    )
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// agregar un dato de la tabla serviciosprincipales de la bd
const addServicePrincipal = async (req, res) => {
  try {
    const { name } = req.body
    if (name === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }
    const costos = { name }
    const connection = await getConnection()
    await connection.query('INSERT INTO serviciosprincipales SET ?', costos)
    res.json({ message: 'costos add' })
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// actualizar un dato de la tabla serviciosprincipales de la bd
const updateServicePrincipal = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre } = req.body
    if (id === undefined || nombre === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }
    const services = { nombre }
    const connection = await getConnection()
    const result = await connection.query(
      'UPDATE serviciosprincipales SET ? WHERE idServiciosP = ?',
      [services, id]
    )
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// eliminar un dato de la tabla serviciosprincipales de la bd
const deleteServicePrincipal = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnection()
    const result = await connection.query(
      'DELETE FROM serviciosprincipales WHERE idServiciosP = ?',
      id
    )
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const methods = {
  getServicesPrincipal,
  getServicePrincipal,
  addServicePrincipal,
  updateServicePrincipal,
  deleteServicePrincipal
}
