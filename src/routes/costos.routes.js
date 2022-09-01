import { Router } from 'express'
import { methods as costosController } from '../controllers/costos.controller'
import { verifyToken, verifyAdmin } from '../controllers/verifyDates'

const costosRoutes = Router()

// ruta para acceder a todos los datos de la tabla costos de la base de datos.
costosRoutes.get('/', costosController.getCostos)

// ruta para acceder a un dato concreto de la basde de datos
costosRoutes.get('/:id', costosController.getCosto)

costosRoutes.get('/service/:id', costosController.getCostoService)

// ruta para agregar un elemento de la tabla costos a la base de datos
costosRoutes.post('/', costosController.addCostos)

// ruta para actualizar un dato de la tabla costos base de datos
costosRoutes.put('/:id', [verifyToken, verifyAdmin], costosController.updateCostos)

// ruta para eliminar un dato de la tabla costos base de datos
costosRoutes.delete('/:id', [verifyToken, verifyAdmin], costosController.deleteCostos)

export default costosRoutes
