const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

class Categoria extends Model {}

Categoria.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre:{
    type: DataTypes.STRING(200),
    allowNull: false
  }
},{
  sequelize,
  underscored: true,
  modelName: 'categorias'
})


module.exports = Categoria