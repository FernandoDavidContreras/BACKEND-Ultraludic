import { Router } from 'express'
import { methods as costosController } from '../controllers/costosHardware.controller.js'
import { verifyToken, verifyAdmin } from '../controllers/verifyDates.js'

const costosHardwareRoutes = Router()

// ruta para acceder a todos los datos de la tabla costos de la base de datos.
costosHardwareRoutes.get('/', costosController.getCostosHardware)
// ruta para acceder a un dato concreto de la basde de datos
costosHardwareRoutes.get('/:id', costosController.getCostoHardware)
costosHardwareRoutes.get('/service/:id', costosController.getCostosHardwareService)
// ruta para agregar un elemento de la tabla costos a la base de datos
costosHardwareRoutes.post('/', [verifyToken, verifyAdmin], costosController.addCostosHardware)

// ruta para actualizar un dato de la tabla costos base de datos
costosHardwareRoutes.put('/:id', [verifyToken, verifyAdmin], costosController.updateCostosHardware)

// ruta para eliminar un dato de la tabla costos base de datos
costosHardwareRoutes.delete('/:id', [verifyToken, verifyAdmin], costosController.deleteCostosHardware)

export default costosHardwareRoutes
