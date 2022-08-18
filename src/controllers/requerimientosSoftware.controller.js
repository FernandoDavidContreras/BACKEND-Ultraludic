import { requerimientosSoftware } from '../../models/requerimientosSoftware'

// funcion para obtener todos los valores de la tablad de la BD
const getRequerimientosSoftware = async (req, res) => {
  try {
    const requerimientossoftware = await requerimientosSoftware.findAll()
    res.json(requerimientossoftware)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para obtener un solo dato de la BD
const getRequetimientoSoftware = async (req, res) => {
  try {
    const { id } = req.params
    const response = await requerimientosSoftware.findOne({
      where: {
        idSoftware: id
      }
    })
    res.json(response)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para agregar datos a la BD
const addrequerimientosSoftware = async (req, res) => {
  try {
    const { name, idusuarios } = req.params
    if (name === undefined || idusuarios === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }
    const newRequerimientosSoftware = await requerimientosSoftware.create({
      name,
      idusuarios
    })
    res.json(newRequerimientosSoftware)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// funcion para eliminar datos de la BD
const deleteRequerimientosSoftware = async (req, res) => {
  try {
    const { id } = req.params
    await requerimientosSoftware.destroy(
      {
        where: {
          idSoftware: id
        }
      }
    )
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const methods = {
  getRequerimientosSoftware,
  getRequetimientoSoftware,
  addrequerimientosSoftware,
  deleteRequerimientosSoftware
}
