import { config } from 'dotenv'

config()

export const PORT = process.env.PORT || 4000

export default {
  port: process.env.PORT_DB || 3000,
  host: process.env.HOST || 'localhost',
  database: process.env.DATABASE || 'ultraludic_bd',
  user: process.env.USER || 'root',
  password: process.env.PASSWORD || 'fernando89',
  secret: process.env.SECRET || 'secretTokenId'
}
