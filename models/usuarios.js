import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database'
import { Solicitud } from './solicitud'
import { RequerimientosSoftware } from './requerimientosSoftware'
import { RequerimientosHardware } from './requerimientosHardware'
import { Cotizacion } from './cotizacion'

const bcrypt = require('bcryptjs')// variable para acceder a las funciones de encriptamiento para el password

// estructura de la BD Usuarios
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

// relacion con la tabla soliocitud
Usuarios.hasMany(Solicitud, {
  foreignKey: 'idusuarios',
  sourceKey: 'idUsuarios'
})

Solicitud.belongsTo(Usuarios, {
  foreignKey: 'idusuarios',
  targetId: 'idPresolicitud'
})

// relacion con la tabla requerimientosSoftware
Usuarios.hasMany(RequerimientosSoftware, {
  foreignKey: 'idusuarios',
  sourceKey: 'idUsuarios'
})

RequerimientosSoftware.belongsTo(Usuarios, {
  foreignKey: 'idusuarios',
  targetId: 'idSoftware'
})

// relacion con la tabla requerimientosHardware
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

// funcion para encriptar la contraseña
const encryptPassword = async (contrasenia) => {
  return bcrypt.hash(contrasenia, 10)
}
export const methods = {
  encryptPassword
}
