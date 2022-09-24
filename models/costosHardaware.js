import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database.js'

export const costosHardware = sequelize.define('CostosHardware', {
  idCostoHardware: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  semana: {
    type: DataTypes.INTEGER
  },
  costo: {
    type: DataTypes.INTEGER
  },
  idservicio: {
    type: DataTypes.INTEGER
  }
})
