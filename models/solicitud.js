import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database'
import { Cotizacion } from './cotizacion'

export const Solicitud = sequelize.define('solicitud', {
  idPresolicitud: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  requerimientosHardware: {
    type: DataTypes.TEXT
  },
  requerimientosSoftware: {
    type: DataTypes.TEXT
  },
  tiempo: {
    type: DataTypes.INTEGER
  },
  empresa: {
    type: DataTypes.STRING
  },
  FechaSolicitud: {
    type: DataTypes.DATEONLY
  },
  idservices: {
    type: DataTypes.INTEGER
  },
  idusuarios: {
    type: DataTypes.INTEGER
  }

})

Solicitud.hasMany(Cotizacion, {
  foreignKey: 'idpresolicitud',
  sourceKey: 'idPresolicitud'
})

Cotizacion.belongsTo(Solicitud, {
  foreignKey: 'idpresolicitud',
  targetId: 'idCotizaciones'
})
