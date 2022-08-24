import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database'
import { Usuarioos } from './usuarios'

export const Roles = sequelize.define('Roles', {
  idRol: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  }
})

Roles.hasMany(Usuarioos, {
  foreignKey: 'idRoles',
  sourceKey: 'idRol'
})

Usuarioos.belongsTo(Roles, {
  foreignKey: 'idRoles',
  targetId: 'idUsuarios'
})
