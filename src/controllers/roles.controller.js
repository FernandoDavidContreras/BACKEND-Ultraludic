import { Roles } from '../../models/roles'

const getRoles = async (req, res) => {
  try {
    const response = await Roles.findAll()
    res.json(response)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const addRoles = async (req, res) => {
  try {
    const { name } = req.body
    if (name === undefined) {
      res.status(400).json({ message: 'Bad request. Please fill all field.' })
    }
    await Roles.create({
      name
    })

    res.json({ message: 'rol add' })
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const deleteRol = async (req, res) => {
  try {
    const { id } = req.params
    const response = await Roles.destroy({
      where: {
        idRol: id
      }
    })

    res.json(response)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const methods = {
  getRoles,
  addRoles,
  deleteRol
}
