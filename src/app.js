import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
// importamos archivos de funcionamiento del proyecto
import costosRoutes from './routes/costos.routes'
import servicesPrincipalRoutes from './routes/servicesPrincipal.routes'
import services from './routes/services.routes'
import routerPresolicitud from './routes/presolicitud.routes'
import usuariosRoute from './routes/usuario.routes'
import routesCotizacion from './routes/cotizacion.route'
import costosHardwareRoutes from './routes/costosHardware.routes'

const app = express()

// settings
app.set('port', 4000)

// Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
  next()
})

// Routes
app.use('/api/costos', costosRoutes)// ruta para acceder a la tabla costos de la BD
app.use('/api/servicesPrincipal', servicesPrincipalRoutes)// ruta para acceder a la tabla service principal de la BD
app.use('/api/services', services)// ruta para acceder a la tabla servicios de la BD
app.use('/api/presolicitud', routerPresolicitud)
app.use('/api/usuarios', usuariosRoute)
app.use('/api/cotizacion', routesCotizacion)
app.use('/api/costoshardware', costosHardwareRoutes) // routes)
export default app
