import { config } from 'dotenv'

config()

export const PORT = process.env.PORT || 4000

export default {
  port: process.env.PORT_DB || 3000,
  host: process.env.HOST || '',
  database: process.env.DATABASE || '',
  user: process.env.USER || '',
  password: process.env.PASSWORD || '',
  secret: process.env.SECRET || ''
}
