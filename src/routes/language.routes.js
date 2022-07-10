import { Router } from 'express'
import { methods as lenguageController } from '../controllers/language.controller'
const router = Router()

// ruta para acceder a todos los datos de al base de datos.
router.get('/', lenguageController.getLanguages)

// ruta para acceder a un dato concreto de la basde de datos
router.get('/:id', lenguageController.getLanguage)

// ruta para agregar un elemento a la base de datos
router.post('/', lenguageController.addLanguage)

// ruta para actualizar un dato de la base de datos
router.put('/:id', lenguageController.updateLanguage)

// ruta para eliminar un dato de la base de datos
router.delete('/:id', lenguageController.deleteLanguage)

export default router
