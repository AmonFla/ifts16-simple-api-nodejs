const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  'api',          // nombre de la base de datos
  'apiuser',      // usuario
  'Api@user123',  // passowrd
  {               //datos de conexión
    host: 'localhost',
    port: '3308',
    dialect: 'mysql'
  }
)

const connectDb = async () => { 
  try {
    await sequelize.authenticate()
    console.log('conectado a la base de datos')
  } catch (error) { 
    console.log('ERROR:', error)
    return process.exit()
  }
}

module.exports = {connectDb, sequelize}