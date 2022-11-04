const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('./../utils/db')

class Post extends Model{ }

Post.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  /*year:{
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1991
    validate:{
      min: {
        args: 1991,
        msg: 'year must be greater than or equal to 1991'
      },
      max: {
        args: new Date().getFullYear(),
        msg: `year must be less than or equal to ${new Date().getFullYear()}`
      },
    }*/
}, {
  sequelize,
  underscored: true,
  modelName: 'posts'
})

module.exports = Post
