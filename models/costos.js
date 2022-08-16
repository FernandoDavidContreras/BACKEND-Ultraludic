import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database'
import { Cotizacion } from './cotizacion'

export const Costos = sequelize.define('Costos', {
  idCosto: {
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
  hora: {
    type: DataTypes.INTEGER
  },
  precio: {
    type: DataTypes.INTEGER
  }
})

Costos.hasMany(Cotizacion, {
  foreignKey: 'idcostos',
  sourceKey: 'idCosto'
})

Cotizacion.belongsTo(Costos, {
  foreignKey: 'idcostos',
  targetId: 'idCosto'
})
