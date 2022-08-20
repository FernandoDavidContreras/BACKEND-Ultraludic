import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database'
import { Solicitud } from './solicitud'
import { RequerimientosSoftware } from './requerimientosSoftware'
import { RequerimientosHardware } from './requerimientosHardware'
import { Cotizacion } from './cotizacion'

const bcrypt = require('bcryptjs')// variable para acceder a las funciones de encriptamiento para el password

// estructura de la BD Usuarios
export const Usuarioos = sequelize.define('Usuarios', {
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
Usuarioos.hasMany(Solicitud, {
  foreignKey: 'idusuarios',
  sourceKey: 'idUsuarios'
})

Solicitud.belongsTo(Usuarioos, {
  foreignKey: 'idusuarios',
  targetId: 'idPresolicitud'
})

// relacion con la tabla requerimientosSoftware
Usuarioos.hasMany(RequerimientosSoftware, {
  foreignKey: 'idusuarios',
  sourceKey: 'idUsuarios'
})

RequerimientosSoftware.belongsTo(Usuarioos, {
  foreignKey: 'idusuarios',
  targetId: 'idSoftware'
})

// relacion con la tabla requerimientosHardware
Usuarioos.hasMany(RequerimientosHardware, {
  foreignKey: 'idusuarios',
  sourceKey: 'idUsuarios'
})

RequerimientosHardware.belongsTo(Usuarioos, {
  foreignKey: 'idusuarios',
  targetId: 'idHardware'
})

Usuarioos.hasMany(Cotizacion, {
  foreignKey: 'idUser',
  sourceKey: 'idUsuarios'
})

Cotizacion.belongsTo(Usuarioos, {
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
