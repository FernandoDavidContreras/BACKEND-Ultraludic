import { RequerimientosHardware, requerimientosHardware } from '../../models/requerimientosHardware'

// funcion para obtener todos los valores de la tablad de la BD
const getRequetimientosHardware = async (req, res) => {
  try {
    const requerimientoshardware = await requerimientosHardware.findAll()
    res.json(requerimientoshardware)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para obtener un solo dato de la BD
const getRequetimientoHardware = async (req, res) => {
  try {
    const { id } = req.params
    const response = await requerimientosHardware.findOne({
      where: {
        idHardware: id
      }
    })
    res.json(response)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para agregar datos a la BD
const addrequerimientosHardware = async (req, res) => {
  try {
    const { name, idusuarios } = req.params
    if (name === undefined || idusuarios === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }
    const newRequerimientosHardware = await requerimientosHardware.create({
      name,
      idusuarios
    })
    res.json(newRequerimientosHardware)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para eliminar datos de la BD
const deleteRequerimientosHardware = async (req, res) => {
  try {
    const { id } = req.params
    await RequerimientosHardware.destroy(
      {
        where: {
          idHardware: id
        }
      }
    )
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const methods = {
  getRequetimientosHardware,
  getRequetimientoHardware,
  addrequerimientosHardware,
  deleteRequerimientosHardware
}
