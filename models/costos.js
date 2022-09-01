import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database'

// estructura de la tabla Costos de la BD
export const CostosSoftware = sequelize.define('CostosSoftware', {
  idCosto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  precio: {
    type: DataTypes.INTEGER
  },
  idservicios: {
    type: DataTypes.INTEGER
  }
})
