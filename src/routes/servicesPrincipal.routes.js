import { Router } from 'express'
import { methods as servicesController } from '../controllers/servicesPrincipal.controller'
const routerServicesPrincipal = Router()

// ruta para acceder a todos los datos de la tabla serviciosprincipales de la bd
routerServicesPrincipal.get('/', servicesController.getServicesPrincipal)

// ruta para acceder a un dato concreto de la tabla serviciosprincipales de la bd
routerServicesPrincipal.get('/:id', servicesController.getServicePrincipal)

// ruta para agregar un elemento a la tabla serviciosprincipales de la bd
routerServicesPrincipal.post('/', servicesController.addServicePrincipal)

// ruta para actualizar un dato de la tabla serviciosprincipales de la bd
routerServicesPrincipal.put('/:id', servicesController.updateServicePrincipal)

// ruta para eliminar un dato de la tabla serviciosprincipales de la bd
routerServicesPrincipal.delete('/:id', servicesController.deleteServicePrincipal)

// ruta para mostrar la relacion de tablas
// routerServicesPrincipal.get('/:id/servicios', servicesController.getServicePrincipalServiciosCosto)

export default routerServicesPrincipal
