import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database'
import { Cotizacion } from './cotizacion'

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

// relacion con la tabla cotizacion
CostosSoftware.hasMany(Cotizacion, {
  foreignKey: 'idcostos',
  sourceKey: 'idCosto'
})

Cotizacion.belongsTo(CostosSoftware, {
  foreignKey: 'idcostos',
  targetId: 'idCosto'
})
