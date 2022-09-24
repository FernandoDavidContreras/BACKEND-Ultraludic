import { config } from 'dotenv'

config()

export default {
  port: process.env.PORT || 3000,
  host: process.env.HOST || '',
  database: process.env.DATABASE || '',
  user: process.env.USER || '',
  password: process.env.PASSWORD || '',
  secret: process.env.SECRET || ''
}
