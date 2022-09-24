import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database.js'
import { Solicitud } from './solicitud.js'
import { Cotizacion } from './cotizacion.js'
import pkg from 'bcryptjs'

const bcrypt = pkg// variable para acceder a las funciones de encriptamiento para el password

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
  telefono: {
    type: DataTypes.INTEGER
  },
  contrasenia: {
    type: DataTypes.STRING
  },
  idRoles: {
    type: DataTypes.INTEGER
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
