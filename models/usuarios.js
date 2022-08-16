import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database'
import { Solicitud } from './solicitud'
import { RequerimientosSoftware } from './requerimientosSoftware'
import { RequerimientosHardware } from './requerimientosHardware'
import { Cotizacion } from './cotizacion'

export const Usuarios = sequelize.define('Usuarios', {
  idUsuarios: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  correo: {
    type: DataTypes.STRING
  },
  contrasenia: {
    type: DataTypes.STRING
  }
})

Usuarios.hasMany(Solicitud, {
  foreignKey: 'idusuarios',
  sourceKey: 'idUsuarios'
})

Solicitud.belongsTo(Usuarios, {
  foreignKey: 'idusuarios',
  targetId: 'idPresolicitud'
})

Usuarios.hasMany(RequerimientosSoftware, {
  foreignKey: 'idusuarios',
  sourceKey: 'idUsuarios'
})

RequerimientosSoftware.belongsTo(Usuarios, {
  foreignKey: 'idusuarios',
  targetId: 'idSoftware'
})

Usuarios.hasMany(RequerimientosHardware, {
  foreignKey: 'idusuarios',
  sourceKey: 'idUsuarios'
})

RequerimientosHardware.belongsTo(Usuarios, {
  foreignKey: 'idusuarios',
  targetId: 'idHardware'
})

Usuarios.hasMany(Cotizacion, {
  foreignKey: 'idUser',
  sourceKey: 'idUsuarios'
})

Cotizacion.belongsTo(Usuarios, {
  foreignKey: 'idUser',
  targetId: 'idCotizaciones'
})
