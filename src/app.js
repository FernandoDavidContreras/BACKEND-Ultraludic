import express from 'express'
import morgan from 'morgan'

// Routes
import languageRoutes from './routes/language.routes'
const cors = require('cors')

const app = express()

// settings
app.set('port', 4000)

// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use((req, res, next) => {
  next()
})

// Routes
app.use('/api/lenguages', languageRoutes)
export default app
