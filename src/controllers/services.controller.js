import { getConnection } from '../database/database'

const getServices = async (req, res) => {
  try {
    const connection = await getConnection()
    const result = await connection.query(
      'SELECT idServicios, name, idServiciosPrincipales FROM sevicios'

    )
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getService = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnection()
    const result = await connection.query(
      'SELECT idServicios, name, idServiciosPrincipales FROM sevicios WHERE idServiciosPrincipales = ?',
      id
    )
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const methods = {
  getServices,
  getService
}
